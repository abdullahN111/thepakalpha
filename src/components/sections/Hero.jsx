"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";
import { heroData } from "@/data/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCardsButton from "./ProductCardsButton";
import Link from "next/link";

const Slide = ({ slide }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center"
    >
      <Image
        src={slide.image}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div
        className={`relative z-20 text-center px-8 max-w-full sm:max-w-xl md:max-w-2xl transform transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl xs:text-[33px] md:text-[37px] uppercase color-white font-medium leading-tight drop-shadow-xl">
          <span className="flex flex-wrap justify-center gap-x-2">
            {slide.title.map((word, i) => (
              <span                key={i}
                className="color-white hover-primary cursor-pointer transition duration-300 ease-in-out"
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <p className="mt-2 mb-6 text-[15px] xs:text-base md:text-[17px] color-white font-normal italic drop-shadow-lg">
          {slide.desc}
        </p>
        <Link href={slide.buttonLink} passHref>
          <PrimaryButton
            text={slide.buttonText}
            borderColor="border-white"
            textColor="color-white"
            arrowColor="color-white"
          />
        </Link>
      </div>
    </div>
  );
};

const Hero = () => {
  const [api, setApi] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) api.scrollNext();
    }, 15000);
    return () => clearInterval(interval);
  }, [api]);

  const nextSlide = () => {
    api?.scrollNext();
  };
  const prevSlide = () => {
    api?.scrollPrev();
  };

  return (
    <section className="max-width mx-auto relative w-full h-screen overflow-hidden">
      <Carousel opts={{ loop: true }} setApi={setApi} className="h-full w-full">
        <CarouselContent className="h-full">
          {heroData.map((slide) => (
            <CarouselItem key={slide.id} className="w-full h-full">
              <Slide
                slide={slide}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ProductCardsButton
        classes="absolute bottom-16 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4"
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </section>
  );
};

export default Hero;
