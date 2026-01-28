import React from "react";
import HowItWorksSection from "../../../../components/HowItWorksSection";

const steps = [
  {
    id: 1,
    title: "Sign Up For Services",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/1.-Sign-up-for-Services.svg",
    imageAlt: "sign up",
    description:
      "Click on the Free Quote button, enter your zip code, and complete the signup process right on our website. If you have questions you can give our friendly staff a call, message us on Facebook, or use our online chat tool.",
  },
  {
    id: 2,
    title: "Schedule Your Initial Cleanup",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/2.-Schedule-Your-Initial-Cleanup.svg",
    imageAlt: "schedule cleanup",
    description:
      "Once you sign up for services a Doodie Duty representative will reach out to schedule your initial cleanup and walk you through the entire process.",
  },
  {
    id: 3,
    title: "Setup Customer Portal",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/3.-Setup-Customer-Portal.svg",
    imageAlt: "customer portal",
    description:
      "Access your personalized customer portal where you can manage your service schedule, view service history, and communicate with our team. Everything you need is at your fingertips.",
  },
  {
    id: 4,
    title: "Attach Payment Method",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/4.-Attach-Payment-Method.svg",
    imageAlt: "payment",
    description:
      "Securely add your preferred payment method to your account. We accept all major credit cards and offer automatic billing for your convenience, so you never have to worry about payments.",
  },
  {
    id: 5,
    title: "Enjoy a Poop Free Yard!",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/5.-Enjoy-a-Poop-Free-Yard.svg",
    imageAlt: "enjoy",
    description:
      "Sit back and relax! With Doodie Duty on the job, you can enjoy your clean, poop-free yard without lifting a finger. We guarantee your satisfaction with every visit.",
  },
];

export default function HowItWorks() {
  return (
    <HowItWorksSection
      subheader="residential process"
      title="How it Works?"
      description="Experience hassle-free pet waste removal with our residential services at Doody Duty"
      steps={steps}
    />
  );
}

