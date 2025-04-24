"use client";

import { productsData } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";

const Products = () => {
  const [startIndex, setStartIndex] = useState(0);

  const [visibleCards, setVisibleCards] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const endIndex = startIndex + visibleCards;

  const nextSlide = () => {
    if (endIndex < productsData.length) setStartIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex((prev) => prev - 1);
  };

  return (
    <section className="max-width mx-auto bg-black/50">
      <div className="px-8 xs:px-14 xsx:px-[105px] sm:px-10 md:px-20 lg:px-12 lg:pr-30 py-0 font-poppins flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        <div className="relative w-full lg:w-1/3 lg:h-[500px] px-3 lg:px-5 py-10">
          <div className="angled-products-section relative z-10 px-6 py-2 text-center lg:text-left flex flex-col justify-center h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Our Products
            </h2>
            <p className="text-white/70 mt-4 text-sm lg:text-base">
              Trusted solutions for tiling, bonding, and wall finishing.
            </p>
            <div className="hidden lg:flex items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                &larr;
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full -z-10 angled-bg-shape" />
        </div>

        <div className="w-full max-w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden py-4 sm:py-0">
          {productsData.slice(startIndex, endIndex).map((product) => (
            <div key={product.id} className="w-full aspect-[3/4] perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute inset-0 rounded-tr-[30px] rounded-bl-[30px] overflow-hidden shadow-lg bg-white text-black backface-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 bg-black/50 w-full px-4 py-2">
                    <h3 className="text-white font-semibold text-lg">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-br-[30px] rounded-tl-[30px] bg-white p-4 text-sm text-gray-800 transform rotate-y-180 backface-hidden overflow-y-auto">
                  <h3 className="font-semibold text-xl my-2 text-primary">
                    {product.title}
                  </h3>
                  <p className="text-base color-black leading-relaxed mb-4 sm:mb-6">
                    {product.description}
                  </p>
                  <PrimaryButton
                    text="See Details"
                    textColor="color-black"
                    borderColor="border-black"
                    arrowColor="color-black"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden items-center gap-4 mt-6 mb-16 mx-auto w-fit">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            &rarr;
          </button>
        </div>
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
