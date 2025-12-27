import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="custom_container flex  md:flex-row flex-col py-10 md:py-24 md:gap-10 gap-3 mx-0 xl:mx-20">
      <div className="flex_center_both items-start md:flex-row flex-row-reverse ">
      <img  src="/icons/line-1.png" className="md:w-[57px] md:h-[130px] h-[79.8px] w-[38.98px] text-wrap"/>
        <h3>Bringing The Value of Comfortness</h3>
      </div>
      <p className="p-regular md:w-290 w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

export default AboutSection;
