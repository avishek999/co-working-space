"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    content:
      "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.”",
    author: "Sarah Johnson",
    position: "Product Manager, TechCorp",
    img: "/icons/user.webp",
  },
  {
    content: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.”",
    author: "David Kim",
    position: "CTO, InnovateX",
    img: "/icons/user.webp",

  },
  {
    content: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.”",
    author: "Emily Parker",
    position: "CEO, BrightSolutions",
      img: "/icons/user.webp",

  },
];

const TestimonialSection = () => {
  return (
    <div className="custom_container">
   

      <div className=" mx-auto my-12 ">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
        
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          navigation
          pagination={{ clickable: true }}

         breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 1,
            },
          }}
          className="md:min-h-[420px]  pb-12"
        >
          {testimonials.map((slide, index) => (
            <SwiperSlide key={index} className="flex_center_both xl:px-60">
              
                <p className="p-big">{slide.content}</p>
                <div className="flex_center_both gap-4 mt-9">
                  <Image src={slide.img} alt="arrow" height={68} width={68} />
                  <div>
                    <h4>{slide.author}</h4>
                    <div>{slide.position}</div>
                  </div>
                </div>
           
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
