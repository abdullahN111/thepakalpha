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

const Footer = () => {
  return (
    <footer className="max-width bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10 px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Pak Alpha Manufacturing"
              width={70}
              height={70}
              priority
            />
            <h3 className="text-[20px] sm:text-[24px] font-poppins flex gap-2 items-center">
              <span className="font-normal text-primary">Pak</span>
              <span className="font-bold text-white">Alpha</span>
            </h3>
          </Link>
          <p className="text-gray-400 max-w-[350px]">
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
          <h2 className="text-[17px] sm:text-lg font-semibold mb-4 md:mb-2">
            Stay Updated!
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[13px] sm:text-sm md:text-base w-[160px] xs:w-[180px] xsx:w-[220px] md:w-[240px] px-3 xs:px-[14px] md:px-4 py-2 xs:py-[10px] lg:py-3 bg-white text-black focus:outline-none rounded-bl-[20px]"
            />
            <button className="px-4 xs:px-5 lg:px-6 py-2 xs:py-[10px] lg:py-3 bg-primary text-white transition duration-300 rounded-tr-[20px] cursor-pointer hover:bg-[#0a72cde6]">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-4">Address</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Al-Kharj Industrial City,</li>
            <li>Modon, Riyadh,</li>
            <li>Saudia Arabia</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Build Better</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#story">Our Story</Link>
            </li>
            <li>
              <Link href="#products">Our Products</Link>
            </li>
            <li>
              <Link href="#message">Our Message</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Our Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/">Tile Grout</Link>
            </li>
            <li>
              <Link href="/">Tile Bond</Link>
            </li>
            <li>
              <Link href="/">Wall Putty</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Important Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/our-story">Our Story</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-gray-500 text-sm">
        <div className="flex flex-col md:flex-row gap-2 items-center space-x-2">
          <span>© Copyright Pak Alpha 2025.</span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/terms" className="flex items-center gap-2">
            <span className="text-2xl">&#x2022; </span>{" "}
            <span>Terms and Conditions</span>
          </Link>
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
