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
      "No, you don't need to be home. As long as we have safe access to your yard (e.g., gate is unlocked), our technicians can complete the service.",
  },
  {
    id: "item-3",
    question: "What do you do with the waste?",
    answer:
      "We bag the waste securely and, unless you request otherwise, we will place it in your trash bin. We can also haul it away for a small additional fee.",
  },
];

export default function Disclaimer() {
  return (
    <div className="">
    <ReusableFAQ 
      faqData={faqData} 
      showViewMoreButton={false}
    />
    </div>
  );
}
