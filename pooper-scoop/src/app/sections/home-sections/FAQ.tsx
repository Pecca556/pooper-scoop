import React from "react";
import ReusableFAQ from "@/components/ReusableFAQ";

const faqData = [
  {
    id: "item-1",
    question: "How often should you scoop the poop?",
    answer:
      "For most yards, we recommend a once-a-week cleaning. However, we offer services more or less frequently depending on the number of dogs you have and the size of your yard.",
  },
  {
    id: "item-2",
    question: "Do I need to be home for the service?",
    answer:
      "No, you don't need to be home. As long as we have safe access to your yard (e.g., gate is unlocked), our crew can complete the service.",
  },
  {
    id: "item-3",
    question: "What do you do with the waste?",
    answer:
      "We bag the waste securely and, unless you request otherwise, we will place it in your trash bin. We can also haul it away for a small additional fee.",
  },
  {
    id: "item-4",
    question: "Do you provide pet waste removal services all year round?",
    answer:
      "Yes! Doodie Duty provides pet waste removal services year-round at all of our locations. Even in the winter, we will still show up to provide services. In locations with snow, most of the waste that accumulates is still scoopable.",
  },
  {
    id: "item-5",
    question: "How do you ensure the safety of my dogs?",
    answer:
      "The safety of our clients and their dogs is a top priority at Doodie Duty. To ensure all dogs are safe, we clean all our equipment and shoes between each yard with a kennel-grade disinfectant to prevent the spread of germs. We also take gate pictures when we are done cleaning so you know your pets won't get out of the yard, and we ensure all our employees are background checked.",
  },
  {
    id: "item-6",
    question: "How much does it cost to hire a professional pet waste specialist?",
    answer:
      "Doodie Duty has pet waste service plans starting as low as $60 per month. However, pricing is based on the size of the yard, service frequency, and number of dogs. Most of our clients end up paying between $95 and $135 per month.",
  },
  {
    id: "item-7",
    question: "Do I have to sign a contract for pet waste services?",
    answer:
      "No contracts! You can start, pause, and cancel your subscription at any time by updating your customer portal or calling our office.",
  },
  {
    id: "item-8",
    question: "Can you clean with my dog in the yard?",
    answer:
      "Yes, we love cleaning with dogs! We simply ask that if your dog has shown signs of aggression, you leave them inside or locked away securely during your cleaning. Ensuring the safety of our team is a top priority. If your dog is aggressive towards our team, you will be asked to lock them away securely or be completely removed from our route.",
  },
];

export default function FAQ() {
  return <ReusableFAQ faqData={faqData} />;
}
