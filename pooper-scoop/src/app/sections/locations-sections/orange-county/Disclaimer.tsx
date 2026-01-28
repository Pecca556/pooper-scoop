"use client";
import DisclaimerBg from "@/components/disclaimer-bg";

export default function Disclaimer() {
  return (
    <div className="w-full">
      <div className="relative pt-10 pb-90 px-5">
        <DisclaimerBg />
        <div className="flex flex-col max-w-[var(--view-width)] mx-auto  gap-[25px]">
          <div className="flex flex-col gap-4 py-14 py-10 px-[50px] bg-[#F8F8F8] rounded-[var(--radius)]">
            <div className="flex flex-col gap-4">
              <p className="p !text-sm">
                One of the primary reasons to hire a pet waste removal service is the convenience it offers. Cleaning up after your pets can be a time-consuming and unpleasant task. A professional service takes care of this chore for you, saving you time and effort.
              </p>
              <p className="p !text-sm">
                Pet waste can pose health risks to both humans and other pets. It can contain harmful bacteria and parasites that can cause illnesses. A pet waste removal service ensures thorough and regular cleaning, reducing the risk of contamination and maintaining a healthier environment for you and your family.
              </p>
              <p className="p !text-sm">
                Accumulated pet waste can produce foul odors that are unpleasant for you and your neighbors. A professional service can remove waste regularly, keeping your outdoor spaces smelling fresh and clean.
              </p>
              <p className="p !text-sm">
                Over time, pet waste can damage your lawn and landscaping, leading to unsightly brown patches and an unhealthy outdoor environment. Regular removal by a pet waste service can help preserve the beauty and integrity of your outdoor spaces.
              </p>
              <p className="p !text-sm">
                Proper disposal of pet waste is essential for environmental reasons. When waste is left untreated, it can contaminate soil and water sources. Many pet waste removal services dispose of waste in an environmentally responsible manner, ensuring that it doesn't harm the ecosystem.
              </p>
              <p className="p !text-sm">
                In summary, hiring a pet waste removal service can save you time, maintain a cleaner and healthier environment, improve the aesthetics of your yard, and promote environmental responsibility. It's a convenient and beneficial solution for pet owners looking to ensure a clean and safe outdoor space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
