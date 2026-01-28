import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        const { email, formType, ...otherData } = body;

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: RESEND_API_KEY not set' },
                { status: 500 }
            );
        }

        if (!process.env.SEND_EMAIL) {
            console.error('SEND_EMAIL is missing');
            return NextResponse.json(
                { error: 'Server configuration error: SEND_EMAIL not set' },
                { status: 500 }
            );
        }

        let subject = `New Submission from Doodie Duty: ${formType || 'Contact Form'}`;
        let htmlContent = '';

        if (formType === 'Signup Quote') {
            const { zipCode, couponCode, numberOfDogs, frequency, phone, phoneConsent, privacyConsent } = otherData;
            htmlContent = `
                <h2>New Instant Quote Request</h2>
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                    <h3 style="margin-top: 0;">Contact Details</h3>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Zip Code:</strong> ${zipCode}</p>
                    <p><strong>Coupon Code:</strong> ${couponCode || 'N/A'}</p>
                </div>
                
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                     <h3 style="margin-top: 0;">Service Preferences</h3>
                    <p><strong>Number of Dogs:</strong> ${numberOfDogs}</p>
                    <p><strong>Frequency:</strong> ${frequency}</p>
                </div>

                 <div style="margin-top: 20px; font-size: 12px; color: #666;">
                    <p>Consents:</p>
                    <ul>
                        <li>Phone Consent: ${phoneConsent ? 'Yes' : 'No'}</li>
                         <li>Privacy Consent: ${privacyConsent ? 'Yes' : 'No'}</li>
                    </ul>
                </div>
            `;
        } else if (formType === 'Service Unavailable Search') {
            const { zipCode, name, phone, address, comment, phoneConsent, privacyConsent } = otherData;
            htmlContent = `
                <h2>Service Unavailable Inquiry</h2>
                <p>A user searched for service in an area that might not be covered yet.</p>
                
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                    <h3 style="margin-top: 0;">User Information</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                     <p><strong>Phone:</strong> ${phone}</p>
                </div>

                <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                    <h3 style="margin-top: 0;">Location Details</h3>
                     <p><strong>Zip Code:</strong> ${zipCode}</p>
                    <p><strong>Address:</strong> ${address}</p>
                </div>

                ${comment ? `
                <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
                    <h3 style="margin-top: 0;">Additional Comments</h3>
                    <p>${comment}</p>
                </div>` : ''}
                
                 <div style="margin-top: 20px; font-size: 12px; color: #666;">
                    <p>Consents:</p>
                    <ul>
                        <li>Phone Consent: ${phoneConsent ? 'Yes' : 'No'}</li>
                         <li>Privacy Consent: ${privacyConsent ? 'Yes' : 'No'}</li>
                    </ul>
                </div>
            `;
        } else {
            // Generic Fallback
            const formattedData = Object.entries(otherData)
                .map(([key, value]) => `<b>${key}:</b> ${value}`)
                .join('<br>');

            htmlContent = `
                <h2>New Form Submission</h2>
                <p><b>Email:</b> ${email}</p>
                ${formattedData}
            `;
        }

        const { data, error } = await resend.emails.send({
            from: 'Doodie Duty <onboarding@resend.dev>',
            to: [process.env.SEND_EMAIL],
            subject: subject,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend returned error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('CRITICAL Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email: ' + (error as Error).message },
            { status: 500 }
        );
    }
}
