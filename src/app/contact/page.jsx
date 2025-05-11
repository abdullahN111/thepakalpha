import Banner from "@/components/sections/Banner";
import Message from "../../../public/images/message.jpg";
import Banner11 from "../../../public/images/banner11.jpg";
import { FaCity } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ContactForm from "@/components/sections/ContactForm";

const page = () => {
  return (
    <main>
      <Banner banner={Message} title="Contact Us" />
      <ContactForm />
      <div className="max-width mx-auto py-12 bg-[#0a73cd]/80 relative w-full overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${Banner11.src})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="flex flex-col gap-6 items-center justify-center max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-white text-3xl sm:text-4xl uppercase font-bold text-center mb-4">
            Our Office
          </h2>
          <div className="bg-white shadow-md shadow-gray-800 flex gap-5 xsx:gap-4 flex-col justify-center items-start rounded-lg py-8 px-4">
            <div className="flex items-center gap-4">
              <FaHouse color="#0a73cd" size={24} />
              <span className="font-medium text-black/80 text-[17px] sm:text-lg">
                {" "}
                Al-Kharj Industrial City, Modon
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaCity color="#0a73cd" size={24} />
              <span className="font-medium text-black/80 text-[17px] sm:text-lg">
                Riyadh, Saudia Arabia
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone color="#0a73cd" size={24} />
              <span className="font-medium text-black/80 text-[17px] sm:text-lg">
                +966 57 490 5755
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
