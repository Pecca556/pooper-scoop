"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

interface VisionMissionBlockProps {
  subheader: string;
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
  textOrderClass: string;
  imageOrderClass: string;
}

export default function VisionMissionBlock({
  subheader,
  title,
  text,
  imageUrl,
  imageAlt,
  textOrderClass,
  imageOrderClass,
}: VisionMissionBlockProps) {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div
        ref={ref}
        /* card */ className={`flex shadow-lg flex-col justify-center gap-[20px] py-14 py-10 px-[50px] bg-[#F8F8F8] rounded-[var(--radius)] ${textOrderClass}`}
      >
        <p
          className={`uppercase subheader transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
        >
          {subheader}
        </p>
        <h2
          className={`h2 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isInView ? "150ms" : "0ms" }}
        >
          {title}
        </h2>
        <p
          className={`p mb-[14px] transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
        >
          {text}
        </p>
      </div>
      <div
        className={`relative shadow-lg rounded-[var(--radius)] overflow-hidden max-lg:min-h-[400px] ${imageOrderClass}`}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="object-cover w-full h-full absolute"
        />
      </div>
    </>
  );
}
