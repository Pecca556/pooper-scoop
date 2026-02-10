import React from "react";
import Image from "next/image";

const Spoil = () => {
  return (
    <>
      <div className="STORY mx-auto w-full max-w-[var(--view-width)] flex-col /* page-padding */ pt-[50px]">
        <div className="/* page-padding */ px-[20px] /* intodiv-spacer */ ">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[20px] items-center max-lg:flex-col">
              <div className="flex flex-1 max-lg:w-full">
                <div className="!aspect-video max-w-[600px] flex-1 overflow-hidden rounded-[var(--radius)] relative">
                  <img src="/images/avif/What-Enzyme-Breaks-Down-Dog-Poop.avif" alt="" className="" />
                  {/* <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe> */}
                </div>
              </div>
              <div className="flex w-full flex-1 flex-col gap-y-[20px]">
                <h2 className="h2">Don't Let Dog Poop Spoil the Party!</h2>
                <p className="p">
                  We know your furry friend is the light of your life, but picking up after them isn't fun. Enter Doodie Duty, your friendly Seattle pet waste service! We specialize in dog waste removal so you can play fetch more and worry about poop less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spoil;
