import Image from "next/image";
import React from "react";
import "./HeroSection.scss";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <div className=" hero_section bg-pinkbg flex-col md:flex-row custom_container  md:pt-30 pt-42 flex_center_both gap-7 md:gap-25 pb-30">
      <div className="text_container">
        <h1 className="text-wrap">Find The Comfort In Your Co-Working Space</h1>
        <p className="p-small mt-10">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
          <br />
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br /> consequat sunt nostrud amet.
        </p>

        <div className="flex items-center gap-14 mt-9">
          <Button title="Find Place" bgColor="white" />
          <div className="text-lg  font-medium cursor-not-allowed  underline ">
            Introduction
          </div>
        </div>
        <div className="absolute border-5 border-[#010101] opacity-10  h-[450px] w-[450px] rounded-full border-dashed -bottom-45 -left-50"></div>
      </div>
      <div className=" relative">
      <div className="relative md:h-[27rem] md:w-[25.5rem]  lg:h-[33.7rem] lg:w-[31.5rem] h-[22.8rem] w-[21.4rem]">
          <Image
            alt="Hero banner"
            src="/images/banner.jpg"
           fill
            className="object-cover"
          />
        </div>

        <div className="absolute flex_center_both md:gap-14 gap-8 bg-[#FFE2B5] lg:px-6 lg:py-8 md:px-4 md:py-5  px-4 py-5 -left-5 lg:-left-25 -bottom-14">
          <div>
            <div className="text-primaryText md:text-5xl text-2xl">200+</div>
            <div className="text-primaryText md:text-lg text-sm">
              Private Office
            </div>
          </div>
          <div>
            <div className="text-primaryText md:text-5xl text-2xl ">100+</div>
            <div className="text-primaryText md:text-lg text-sm">
             Co-Working Desk
            </div>
          </div>{" "}
          <div>
            <div className="text-primaryText md:text-5xl text-2xl">200+</div>
            <div className="text-primaryText md:text-lg text-sm">
           Meeting Office
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
