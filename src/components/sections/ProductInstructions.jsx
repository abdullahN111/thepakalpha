"use client";

import { useState } from "react";
import Banner from "../../../public/images/banner6.jpg";

const ProductInstructions = ({ titles, content }) => {
  const [activeIndex, setActiveIndex] = useState();

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="max-width mx-auto py-12 px-6 bg-[#0a73cd]/80 relative w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div>
        <div>
          <div className="flex flex-col gap-2 items-center justify-center max-w-3xl mx-auto px-6">
            <h2 className="my-4 text-white text-3xl sm:text-4xl uppercase font-bold text-center">
              Intstruction
            </h2>
            <p className="text-white/90 text-lg text-center font-medium">
              A high-quality, durable solution designed to fill gaps between
              tiles, ensuring a seamless and long-lasting finish. Our grout is
              resistant to cracks, stains, and moisture, making it ideal for
              both residential and commercial spaces.
            </p>
          </div>
          <div className="my-12 space-y-6 px-4 md:px-12">
            {[...Array(titles.length)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-tl-[30px] rounded-r-[5px] border-gray-200 py-6 px-6 hover:shadow-md shadow-black"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  <h3 className="font-bold text-lg sm:text-xl text-black/80">
                    {titles[index]}
                  </h3>
                  <span className="text-2xl sm:text-3xl text-primary cursor-pointer font-bold">
                    {activeIndex === index ? "–" : "+"}
                  </span>
                </div>
                <hr
                  className={`${
                    activeIndex === index
                      ? "border-t-1 mb-5 mt-3 border-black/30"
                      : "hidden"
                  }`}
                />
                <div
                  className={`overflow-hidden transition-all duration-600 ease-in-out ${
                    activeIndex === index
                      ? "overflow-y-auto max-h-96 mt-2"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-[17px] sm:text-lg text-black/70">
                    {content[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInstructions;
