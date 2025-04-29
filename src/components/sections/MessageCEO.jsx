"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Banner from "../../../public/images/banner5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../ui/carousel";
import { messageData } from "@/data/data";

const MessageCEO = () => {
  const [api, setApi] = useState();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef();

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

  useEffect(() => {
    if (!isVisible || !api) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible, api]);

  return (
    <section
      ref={sectionRef}
      className="max-width mx-auto bg-white relative overflow-hidden font-poppins" id="message"
    >
      <div className="flex flex-col lgs:flex-row items-center gap-12 px-8 lgs:px-12 py-20 sm:py-30">
        <div className="w-full lgs:w-1/2">
          <div className="absolute top-0 left-0 w-full h-full z-0 angled-bg-shape-message" />
          <div className="relative rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-lg">
            <Image
              src={Banner}
              alt="CEO Message Banner"
              layout="responsive"
              width={600}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div
          className={`w-full lgs:w-1/2 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-3 xl:space-x-4">
            <h2 className="text-primary text-base font-bold tracking-widest uppercase">
              Message From CEO
            </h2>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {messageData.map((item) => (
                  <CarouselItem key={item.id}>
                    <h3 className="text-3xl lg:text-4xl font-bold color-black mb-5 xl:mb-6">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-3 xl:mb-4">
                      {item.desc}
                    </p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="hidden" />
            </Carousel>
            <div>
              <p className="text-gray-800 font-semibold">Asadullah</p>
              <p className="text-gray-500 text-sm">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageCEO;
