

import Image from "next/image";

const Banner = ({ banner, title }) => {
  return (
    <section className="max-width mx-auto relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src={banner}
        alt="Pak Alpha Manufacturing"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-full sm:max-w-xl md:max-w-2xl transform transition-all duration-200">
        <h1 className="text-[32px] md:text-[38px] text-white/80 opacity-60 font-bold leading-tight drop-shadow-xl">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
