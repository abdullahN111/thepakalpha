"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const Hero = ({
  height,
  banner,
  showButton = true,
  word1,
  word2,
  word3,
  text,
}) => {
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
      className={`max-width mx-auto relative w-full ${height} flex items-center justify-center overflow-hidden`}
    >
      <Image
        src={banner}
        alt="Pak Alpha Manufacturing"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className={`relative z-20 text-center px-4 max-w-2xl transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-[42px] color-white font-semibold leading-tight drop-shadow-xl">
          <span className="relative space-x-2">
            <span className="color-white hover-primary cursor-pointer transition duration-300 ease-in-out">
              {word1}
            </span>
            <span className="color-white hover-primary cursor-pointer transition duration-300 ease-in-out">
              {word2}
            </span>
            <span className="color-white hover-primary cursor-pointer transition duration-300 ease-in-out">
              {word3}
            </span>
          </span>
        </h1>
        <p className="mt-2 text-base md:text-[17px] color-white font-light drop-shadow-lg">
          {text}
        </p>
        {showButton && (
          <PrimaryButton
            text="Learn More"
            borderColor="border-white"
            textColor="color-white"
            arrowColor="color-white"
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
