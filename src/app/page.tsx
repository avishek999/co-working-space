import AboutSection from "@/sections/AboutSection";
import HeroSection from "@/sections/HeroSection";
import PhotoGallerySection from "@/sections/PhotoGallerySection";
import ServiceSection from "@/sections/ServiceSection";
import TestimonialSection from "@/sections/TestimonialSection";
import VideoSection from "@/sections/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PhotoGallerySection />
      <ServiceSection />
      <VideoSection />
      <TestimonialSection />
    </div>
  );
}
