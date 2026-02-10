import { NextResponse } from 'next/server';
import { Resend } from 'resend';



export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        const { referrerName, referrerEmail, friends, newsletter } = body;

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'Server configuration error: RESEND_API_KEY not set' },
                { status: 500 }
            );
        }

        if (!process.env.SEND_EMAIL) {
            return NextResponse.json(
                { error: 'Server configuration error: SEND_EMAIL not set' },
                { status: 500 }
            );
        }

        // Format friends list for email
        const friendsListHtml = friends
            .map(
                (friend: any, index: number) => `
            <div style="margin-bottom: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 4px;">
                <strong>Friend ${index + 1}:</strong><br>
                Name: ${friend.name}<br>
                Email: ${friend.email}
            </div>
        `
            )
            .join('');

        const { data, error } = await resend.emails.send({
            from: 'Doodie Duty <onboarding@resend.dev>',
            to: [process.env.SEND_EMAIL],
            subject: `New Referral from ${referrerName}`,
            html: `
        <h2>New Refer a Friend Submission</h2>
        
        <h3>Referrer Information</h3>
        <p>
            <strong>Name:</strong> ${referrerName}<br>
            <strong>Email:</strong> ${referrerEmail}<br>
            <strong>Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}
        </p>

        <h3>Referred Friends (${friends.length})</h3>
        ${friendsListHtml}
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
