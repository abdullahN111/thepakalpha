import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../../../public/images/logo.png";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="max-width mx-auto bg-black text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10 px-6 md:px-20">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Pak Alpha Manufacturing"
              width={70}
              height={70}
              priority
            />
            <h3 className="text-[20px] sm:text-[24px] flex gap-2 items-center">
              <span className="font-bold italic text-primary">Pak</span>
              <span className="font-extrabold">Alpha</span>
            </h3>
          </Link>
          <p className="text-white/60 poppins-light max-w-[350px]">
            The region’s largest homegrown manufacturers of global products and
            solutions.
          </p>
          <div className="flex items-center gap-1">
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] sm:text-lg font-bold mb-4 md:mb-2">
            Stay Updated!
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm md:text-base w-[160px] xs:w-[180px] xsx:w-[220px] md:w-[250px] px-3 xs:px-[14px] md:px-4 py-2 xs:py-[10px] lg:py-3 bg-white text-black/80 focus:outline-none rounded-bl-[20px]"
            />
            <button className="px-4 xs:px-5 lg:px-6 py-2 xs:py-[10px] lg:py-3 bg-primary text-white/80 transition duration-300 rounded-tr-[20px] cursor-pointer hover:bg-[#0a72cde6] poppins-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
<FooterLinks />
    
      <div className="border-t border-gray-700 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-white/60 poppins-light text-sm">
        <div className="flex flex-col md:flex-row gap-2 items-center space-x-2">
          <span>© Copyright Pak Alpha 2025.</span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex space-x-6">
          {/* <Link href="/terms" className="flex items-center gap-2">
            <span className="text-2xl">&#x2022; </span>{" "}
            <span>Terms and Conditions</span>
          </Link> */}
          <Link href="/privacy" className="flex items-center gap-1">
            <span className="text-2xl">&#x2022; </span>{" "}
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
