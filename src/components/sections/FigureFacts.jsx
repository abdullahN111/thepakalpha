"use client";

import CountUp from "react-countup";
import Banner from "../../../public/images/banner6.jpg";
import { figureFactsData } from "@/data/data";
import PrimaryButton from "../PrimaryButton";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const FigureFacts = ({ showButton = true }) => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="max-width mx-auto bg-gray-900/97 relative w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${Banner.src})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="py-16 px-6">
        <div className="flex flex-col gap-2 items-center justify-center max-w-3xl mx-auto px-6">
          <h2 className="my-4 text-white text-3xl sm:text-4xl uppercase font-bold text-center">
            FIGURES & FACTS
          </h2>
          <p className="text-white/80 text-base xs:text-[17px] sm:text-lg text-center font-normal">
            Our figures reflect our commitment to quality, innovation, and
            excellence in manufacturing.
          </p>
        </div>
        <div className="my-6 p-4 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
          {figureFactsData.map((item) => {
            return (
              <div
                className="bg-white rounded-tr-[30px] rounded-bl-[30px] flex flex-col items-center justify-center gap-[6px] py-6 px-4 w-auto sm:w-[250px]"
                key={item.id}
              >
                <div className="text-[26px] xsx:text-3xl font-bold text-primary">
                  {startCount ? <CountUp end={item.count} duration={3} /> : 0}
                  <span>{item.plus}</span>
                </div>
                <h4 className="text-black text-lg xsx:text-xl font-bold text-center">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
        {showButton && (
          <PrimaryButton
            text="See More"
            borderColor="border-white"
            arrowColor="color-white"
          />
        )}
      </div>
    </section>
  );
};

export default FigureFacts;
