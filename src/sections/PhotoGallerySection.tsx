"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const PhotoGallerySection = () => {
  const images = [
    {
      src: "/images/slider-img-1.jpg",
      title: "Private Space",
      link: "/private-space",
    },
    {
      src: "/images/slider-img-2.jpg",
      title: "Meeting Room",
      link: "/meeting-room",
    },
    {
      src: "/images/slider-img-3.jpg",
      title: "Office Space",
      link: "/office-space",
    },
    {
      src: "/images/slider-img-4.jpg",
      title: "Co-working Hub",
      link: "/co-working-hub",
    },
    {
      src: "/images/slider-img-5.jpg",
      title: "Creative Studio",
      link: "/creative-studio",
    },
  ];

  return (
    <div className="custom_container">
      <h2 className="text-center">
        Hundreds Places to Incerease <br /> Your Productivity
      </h2>

      <div className=" mx-auto my-12 ">
        <Swiper
          modules={[Autoplay]}
          // spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-md overflow-hidden  "
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="  relative  w-[398px] h-[468px]  ">
                <Image
                  src={slide.src}
                  fill
                  alt={`House ${index + 1}`}
                  className="  object-cover rounded-2xl"
                />
              </div>

               <div className="flex_center_both mt-3 gap-16">
                <h4>{slide.title}</h4>
                <Link href={slide.link} className="text-[#4569F1] text-2xl flex gap-2 items-center">Find One  
                
                <Image src="/icons/arrow-up.png" alt="arrow" height={24} width={24}/>
                </Link>
              </div> 
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoGallerySection;
