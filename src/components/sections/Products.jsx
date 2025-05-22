"use client";

import { productsData } from "@/data/productData";
import Banner from "../../../public/images/banner6.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import ProductCardsButton from "./ProductCardsButton";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

const Products = () => {
  const [visibleCards, setVisibleCards] = useState(2);
  const [api, setApi] = useState();

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    api?.scrollNext();
  };

  const prevSlide = () => {
    api?.scrollPrev();
  };

  return (
    <section
      className="max-width mx-auto bg-black/30 relative w-full overflow-hidden"
      id="products"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="px-8 xs:px-14 xsx:px-[105px] sm:px-10 md:px-20 lg:px-12 lg:pr-30 py-0 pb-10 lg:pb-0 font-poppins flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        <div className="relative w-full lg:w-1/3 lg:h-[600px] px-3 lg:px-5 py-10">
          <div className="angled-products-section relative z-10 px-6 py-2 text-center lg:text-left flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-4xl uppercase font-bold text-white">
              Our Products
            </h2>
            <p className="text-white/80 mt-4 text-base sm:text-[17px] poppins-light">
              Trusted solutions for tiling, bonding, and wall finishing.
            </p>
            <ProductCardsButton
              classes="hidden lg:flex items-center gap-4 mt-6"
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full -z-10 angled-bg-shape" />
        </div>

        <div className="w-full max-w-[700px] overflow-hidden py-8 sm:py-0">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {productsData.map((product) => (
                <CarouselItem
                  key={product.id}
                  className={`w-full ${
                    visibleCards === 1 ? "basis-full" : "basis-1/2"
                  } flex-shrink-0 px-3`}
                >
                  <div className="aspect-[3/4] perspective lgs:py-8">
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                      <div className="absolute inset-0 rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-lg text-black backface-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          priority={true}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 bg-black/50 w-full px-4 py-2">
                          <h3 className="text-white font-bold text-lg">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-br-[30px] rounded-tl-[30px] bg-white p-4 text-gray-800 transform rotate-y-180 backface-hidden overflow-y-auto">
                        <h3 className="font-bold text-xl my-1 text-primary">
                          {product.title}
                        </h3>
                        <p className="text-[15px] md:text-base text-black/80 leading-relaxed mb-3 sm:mb-5 poppins-light">
                          {product.description}
                        </p>
                        <Link href={`/product/${product.id}`}>
                          <PrimaryButton
                            text="See Details"
                            borderColor="border-black"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <ProductCardsButton
          classes="flex lg:hidden items-center gap-4 mb-16 mx-auto w-fit"
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />

        <style jsx>{`
          .perspective {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .hover\:rotate-y-180:hover {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Products;
