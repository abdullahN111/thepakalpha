"use client";

import Banner from "../../../public/images/banner6.jpg";
import { ourProcessData } from "@/data/data";
import PrimaryButton from "../PrimaryButton";
import { useEffect, useRef, useState } from "react";

const FigureFacts = ({ showButton = true }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="max-width mx-auto relative w-full overflow-hidden bg-gray-950
"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="py-20 px-6">
        <div className="flex flex-col gap-3 items-center justify-center max-w-3xl mx-auto text-center px-6">
          <h2 className="text-white text-3xl sm:text-4xl uppercase font-bold">
            OUR PROCESS
          </h2>
          <p className="text-white/80 text-base sm:text-lg font-normal">
            From sourcing to delivery, here's how we ensure quality every step
            of the way.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ourProcessData.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl transform transition-all duration-600 ease-out delay-${
                index * 100
              } p-6 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-xl sm:text-[23px] font-semibold text-primary mb-[6px] text-center">
                {item.title}
              </h3>
              <p className="text-gray-800 text-base sm:text-lg text-center">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center mt-10">
            <PrimaryButton
              text="Explore More"
              borderColor="border-white"
              arrowColor="color-white"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FigureFacts;
