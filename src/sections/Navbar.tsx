"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavItems = ["Home", "Features", "Service", "Location", "About"];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <nav className={`custom_container fixed z-50 py-2 w-full ${hasScrolled ? "bg-white/70 backdrop-blur-sm": ""}`}>
      <div className="flex items-center justify-between">
        <Image src="/icons/logo.png" alt="Logo" height={51} width={171} />

        <div>
          <ul className="flex_center_both  gap-[34px]  nav_items">
            {NavItems.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>

          <Image
            src="/icons/hamburger-icon.png"
            alt="hamburger icon"
            width={50}
            height={50}
            className="hamburger_icon "
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {isSidebarOpen && (
          <div className="bg-black/80 z-[999999] w-screen h-screen absolute right-0 bottom-0 top-0 text-white custom_container py-6">
            <div className="flex justify-between items-center">
              <Image src="/icons/logo-light.png" alt="Logo" height={51} width={171} />

              <div onClick={() => setIsSidebarOpen(false)}>X</div>
            </div>

            <ul className="flex  items-start flex-col  gap-[20px] mt-9  text-white">
              {NavItems.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
