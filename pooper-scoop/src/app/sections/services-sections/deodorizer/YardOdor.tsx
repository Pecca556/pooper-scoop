import React from "react";

interface Location {
  name: string;
  description: string;
  cities: string[];
  zipCodes: string[];
  mapEmbedUrl?: string;
}

interface YardOdorProps {
  location: Location;
}

const YardOdor = ({ location }: YardOdorProps) => {
  return (
    <div className="STORY mx-auto w-full max-w-[var(--view-width)] flex-col /* page-padding */ py-[50px] max-lg:pb-[10px]">
      <div className="/* page-padding */ px-[20px] /* intodiv-spacer */ pb-[40px] max-lg:pb-0">
        <div className="flex flex-col">
          <div className="flex flex-row gap-[20px] max-lg:flex-col">
            <div className="flex flex-1">
              <div className="!aspect-video max-w-[600px] flex-1 rounded-[var(--radius)] overflow-hidden bg-gray-100 border-5 border-[var(--brandcolor-darkgreen)]">
                {location.mapEmbedUrl && (
                  <iframe
                    src={location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  ></iframe>
                )}
              </div>
            </div>
            <div className="flex w-full flex-1 flex-col gap-y-[20px]">
              <h2 className="h2">Pet Waste Service Locations</h2>
              <p className="p">
                Our exclusive Yard Odor Destroyer is trusted by professional
                pet waste specialists nationwide. Safe for pets, families, and the
                environment, this non-toxic, biodegradable formula uses natural
                bacteria that activates into enzymes, breaking down stubborn
                odors from urine, waste, vomit, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YardOdor;


