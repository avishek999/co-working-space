"use client";
import React, {  useState } from "react";

const VideoSection = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  
  return (
    <div className=" py-12 ">
      <h3 className="text-center">
        Spending time away from the office at a coworking space <br /> can also
        spark new ideas.{" "}
      </h3>
      <div className="flex_center_both">
        <img
          src="/icons/line-2.png"
          className="md:w-[700.17px] md:h-[40.12px] h-[79.8px] w-[38.98px] mt-6"
        />
      </div>

      <div className="w-full h-full mt-15 relative aspect-video">
        {isPlay ? (
          <video
            src="/videos/office.mp4"
            autoPlay
            muted
            className="w-full h-full"
          />
        ) : (
          <img src="/images/video-img.jpg" className="w-full h-full" />
        )}
        <div
          className="absolute w-[12.5rem] h-[12.5rem] z-10 cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex_center_both"
          onClick={() => setIsPlay((prev) => !prev)}
        >
          <div className="relative w-full h-full rounded-full bg-white/50 animate-pulse" />
          <img
            src={` ${isPlay ? "/icons/pause.svg" : "/icons/play.svg"}`}
            className="absolute w-[6.626rem] h-[9.562rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
