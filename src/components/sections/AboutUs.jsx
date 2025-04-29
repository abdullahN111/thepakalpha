"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect } from "react";
import { aboutUsData } from "@/data/data";
import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const AboutUs = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector(".carousel-next")?.click();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-width mx-auto font-poppins" id="story">
      <div className="flex flex-col gap-10 py-12">
        <div className="bg-white">
          <div className="flex flex-col gap-2 items-center justify-center max-w-3xl mx-auto px-6">
            <h2 className="my-4 text-primary text-4xl font-bold text-center">
              Who Are We
            </h2>
            <p className="color-black text-base xs:text[17px] sm:text-lg text-center">
              We manufacture high-quality tile bond, grout, tile grout, and wall
              putty, ensuring strong and lasting results for every project.
              Beyond construction, we also offer expert paper cutting and
              printing services, delivering precision and reliability for your
              business needs, Building strong foundations with quality and
              precision.
            </p>
          </div>
        </div>
        <hr className="border-t-2 text-black/30" />
        <div className="flex items-center justify-center pt-4 w-full overflow-hidden px-16 xsx:px-16 sm:px-4 angled-section">
          <Carousel
            className="w-full max-w-sm mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {aboutUsData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="flex flex-col items-center justify-center group"
                >
                  <h2 className="color-black text-xl xs:text-[23px] sm:text-[28px] font-semibold text-center px-6 mb-4">
                    {item.title}
                  </h2>
                  <div className="relative w-full overflow-hidden rounded-tr-[30px] rounded-bl-[30px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                      sizes="100vw"
                      width={0}
                      height={0}
                    />

                    <div className="absolute inset-0 bg-black/30 text-white flex items-end transition-all duration-300 p-4 group-hover:bg-black/60">
                      <p className="text-[13px] xs:text-[15px] sm:text-[17px] w-full line-clamp-1 group-hover:line-clamp-none transition-all duration-300 ease-in-out max-h-[3.5rem] group-hover:max-h-[100%] overflow-hidden">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer" />
            <CarouselNext className="cursor-pointer carousel-next" />
          </Carousel>
        </div>
        <PrimaryButton
          text="See More"
          borderColor="border-black"
          textColor="color-black"
          arrowColor="color-black"
        />
      </div>
    </section>
  );
};

export default AboutUs;
