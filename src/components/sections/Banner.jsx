"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

const Banner = ({ banner, title}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-width mx-aut relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src={banner}
        alt="Pak Alpha Manufacturing"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className={`relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-full sm:max-w-xl md:max-w-2xl transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-[34px] md:text-[40px] hover-primary text-white/90 font-semibold leading-tight drop-shadow-xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
