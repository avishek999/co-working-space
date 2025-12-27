import Image from "next/image";
import React from "react";

const ServiceSection = () => {
  return (
    <div className="custom_container bg-graybg py-16">
      <div className="flex justify-between md:items-center flex-col-reverse md:flex-row items-start gap-3 m">
        <p className="p-regular md:w-150">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam.
        </p>
        <h3>
          Our Values to Match <br /> Your Comfortness
        </h3>
      </div>

      <div className="mt-12 flex items-center md:flex-row flex-col gap-10">
        <div className="relative md:w-[559px] md:h-[444px] h-[202px] w-[342px]">
          <Image
            alt="service image"
            fill
            src="/images/service-img-1.jpg"
            className="object-cover"
          />
        </div>

        <div className="space-y-12">
          <h4 className="underline">Good Facilities</h4>

          <h4 className="underline ">Simple & Modern</h4>
          <p className="p-regular md:w-150">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>

          <h4 className="underline ">Productivty Oriented</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
