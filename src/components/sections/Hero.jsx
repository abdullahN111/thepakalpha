"use client";

import Image from "next/image";
import Banner from "../../../public/images/banner3.png";
import { useState, useEffect } from "react";
import PrimaryButton from "../PrimaryButton";

const Hero = ({height}) => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const words = ["BUILD.", "BOND.", "BEAUTIFY."];

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count >= words.length) {
        clearInterval(interval);
        setHighlightIndex(-1);
      } else {
        setHighlightIndex((prev) => prev + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`max-width mx-auto relative w-full ${height} flex items-center justify-center overflow-hidden`}>
      <Image
        src={Banner}
        alt="Pak Alpha Manufacturing"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-[44px] color-white font-semibold leading-tight drop-shadow-xl">
          {words.map((word, index) => (
            <span key={index} className="relative mx-1">
              <span className="color-white hover-primary cursor-pointer">
                {word}
              </span>
              <span
                className={`absolute left-0 top-[3] transition-opacity duration-800 text-primary pointer-events-none ${
                  highlightIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>
        <p className="mt-2 text-base md:text-[17px] color-white font-light drop-shadow-lg font-poppins">
          Tile bond, grout, wall putty, and precision paper cutting & printing —
          all under one roof.
        </p>
        <PrimaryButton
          text="Learn More"
          borderColor="border-white"
          textColor="color-white"
          arrowColor="color-white"
        />
      </div>
    </section>
  );
};

export default Hero;
