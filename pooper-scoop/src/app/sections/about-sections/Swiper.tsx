"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://swoopscoop.com/wp-content/uploads/2024/10/ScoopSwoop-46.webp",
  "https://swoopscoop.com/wp-content/uploads/2024/10/ScoopSwoop-47.webp",
  "https://swoopscoop.com/wp-content/uploads/2024/10/ScoopSwoop-48.webp",
  // Add more URLs as needed
];

export default function GallerySwiper() {
  return (
    <div
      className="customer-promise mx-auto w-full"
      style={{
        maxWidth: 800,
        height: 500,
        minHeight: 500,
        background: "#f8fafc", // light gray for debugging
        position: "relative"
      }}
    >
      <Swiper
        modules={[Zoom, Navigation, Pagination]}
        zoom={true}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        style={{ height: "100%" }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-zoom-container" style={{ height: "100%" }}>
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #222;
          display: block !important;
        }
        .swiper-pagination {
          display: block !important;
        }
      `}</style>
    </div>
  );
}
