"use client";

import { useState } from "react";
import Banner from "../../../public/images/banner6.jpg";

const instructionsData = [
  {
    title: "Surface Preparation",
    content: `Tiles must be firmly attached to a sound
 subsurface and tile adhesive must be
 cured a minimum 24 hours prior to
 grout application. Remove any loose
 material or dust from tiles and joints.`,
  },
  {
    title: "Mixing",
    content: `Dry-blend powder before use. Stir tile grout
 into clean water. Power mixes at less than
 300 RPM until you get a stiff creamy
 consistency. Use approximately 4 parts
 grout to 1 part water by volume (2 – 3) liters
 per 10 kg bag. Avoid thinning at this will
 weaken the grout.pot life of mixed grout is
 approximately 2 hours.`,
  },
  {
    title: "Application",
    content: `Lightly damped tile with clean water before grouting. This
 makes grouting easier and the finished tile clear, highly
 pours tile will require additional wetting of the joints to
 prevent excessive water loss from the grout. Float held at
 approximately 45 angles, work diagonally to joints using
 adequate pressure to ensure that grout bonds to
 subsurface and fills in joints. Remove as much excess
 grout possible from the surface of the tiles with edge of
 the rubber grout float. Allow grout to set-up approximately
 10 to 20 minutes in joint. Soak sponge or cheese cloth
 water. Rinse out excess water completely and wipe tiles
 clean using a circular motion. Rinse sponge and rinse out
 frequently and keep water supply clean. Joints should
 become smooth and level with edges of tile. Allow
 installation to dry for approximately 30 to 45 minutes or
 until a haze forms on tile and the grout in the joints sets
 firm. Use a soft, and clean dry cloth polish off haze and dry
 remaining grout residue.`,
  },
  {
    title: "Curing",
    content: `Proper curing is necessary for grout to achieve maximum
 strength. After final soft cloth polishing, wait 2 to 4 hours,
 the lightly dampen installation with clean, cool water and
 cover entire surface for a minimum 3 days with Kraft tape
 paper with edges lapped. If this is impractical, lightly mist
 grout several times a day for 3 days.`,
  },
  {
    title: "Uses",
    content: `Tile Grout is suitable for use in
 areas ranging from residential to
 heavy commercial. Maybe used
 with all type of tile, ceramic,
 marble, slat, limestone and granite.
 It is suitable for use in commercial
 kitchens, food processing plants
 and residential floors, wall,
 swimming pools, shower and
 countertops.`,
  },
];

const ProductInstructions = () => {
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
            {instructionsData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-tr-[30px] rounded-bl-[30px] border-gray-200 py-6 px-6 hover:shadow-sm shadow-black"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  <h3 className="font-bold text-lg sm:text-xl text-black/80">
                    {item.title}
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "overflow-y-auto max-h-96 mt-2"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-[17px] sm:text-lg text-black/70">
                    {item.content}
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
