import React from "react";

interface GrassFooterProps {
  grassImageUrl?: string;
  dogImageUrl?: string;
  dogImageAlt?: string;
}

export default function GrassFooter({
  grassImageUrl = "/images/home-page/grass-black.svg",
  dogImageUrl = "/images/avif/mascottes/grass-divider-dog-shovel.avif",
  dogImageAlt = "dog with a shovel",
}: GrassFooterProps) {
  return (
    <div
      className="grass-and-dog relative bg-repeat-x bg-bottom [image-rendering:crisp-edges] bg-[length:auto_100%] h-[90px] dlg:h-[150px] w-full"
      style={{ backgroundImage: `url(${grassImageUrl})` }}
    >
      {dogImageUrl && (
        <div className="dog hidden lg:block absolute bottom-0 ">
          <img src={dogImageUrl} alt={dogImageAlt} className="w-55 h-auto "/>
        </div>
      )}
    </div>
  );
}