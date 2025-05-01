"use client";

import CountUp from "react-countup";
import Image from "next/image";
import Banner from "../../../public/images/banner6.jpg";
import { figureFactsData } from "@/data/data";
import PrimaryButton from "../PrimaryButton";

const FigureFacts = () => {
  return (
    <section className="max-width mx-auto bg-gray-900/95 relative w-full overflow-hidden">
      <Image
        src={Banner}
        alt="Pak Alpha Manufacturing"
        layout="fill"
        objectFit="cover"
        priority
        className="-z-10"
      />
      <div className="py-16 px-6">
        <div className="flex flex-col gap-2 items-center justify-center max-w-3xl mx-auto px-6">
          <h2 className="my-4 text-primary text-4xl font-bold text-center">
            FIGURES & FACTS
          </h2>
          <p className="color-white text-base xs:text[17px] sm:text-lg text-center">
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
                  <CountUp end={item.count} duration={5} />
                  <span>{item.plus}</span>
                </div>
                <h4 className="text-black text-lg xsx:text-xl font-semibold text-center">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
        <PrimaryButton
          text="See More"
          borderColor="border-white"
          arrowColor="color-white"
        />
      </div>
    </section>
  );
};

export default FigureFacts;
