"use client";

import { useInView } from "@/hooks/useInView";

export default function InViewExample() {
  // Example 1: Simple usage with console logging
  const { ref: ref1, isInView: isInView1 } = useInView({
    logToConsole: true,
    threshold: 0.5, // Element must be 50% visible
  });

  // Example 2: With custom callback
  const { ref: ref2, isInView: isInView2 } = useInView({
    onInView: (entry) => {
      console.log("Custom callback - Element entered view:", entry.target);
    },
    threshold: 0.1, // Trigger when 10% visible
  });

  return (
    <div className="flex flex-col gap-[100vh]">
      {/* First element */}
      <div
        ref={ref1}
        className={`todo p-8 rounded-lg transition-all duration-500 ${
          isInView1
            ? "bg-green-500 opacity-100 scale-100"
            : "bg-gray-300 opacity-50 scale-95"
        }`}
      >
        <h2 className="text-2xl font-bold">Element 1</h2>
        <p>Status: {isInView1 ? "In View ✅" : "Not in view ❌"}</p>
      </div>

      {/* Second element */}
      <div
        ref={ref2}
        className={`todo p-8 rounded-lg transition-all duration-500 ${
          isInView2
            ? "bg-blue-500 opacity-100 translate-x-0"
            : "bg-gray-300 opacity-50 -translate-x-10"
        }`}
      >
        <h2 className="text-2xl font-bold">Element 2</h2>
        <p>Status: {isInView2 ? "In View ✅" : "Not in view ❌"}</p>
      </div>

      {/* Add more elements as needed */}
    </div>
  );
}
