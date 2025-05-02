"use client";

import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";

import Link from "next/link";

const NavbarSM = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={toggleMenu}>
        <HiMenu className="color-white text-[26px] sm:text-3xl cursor-pointer" />
      </button>

      <div
        className={`
          fixed top-0 right-0 h-full w-[60%] bg-white shadow-lg z-50 
          transform transition-transform duration-400 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end py-4 px-3 sm:px-4">
          <button
            onClick={toggleMenu}
            className="text-black text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>
        <Link href="/" className="flex items-center justify-start p-1 sm:p-2">
          <Image
            src={Logo}
            alt="Pak Alpha Manufacturing"
            width={65}
            height={65}
          />
          <h3 className="text-base sm:text-lg flex gap-1 sm:gap-2 items-center">
            <span className="poppins-semibold-italic text-primary">Pak</span>
            <span className="poppins-extrabold color-black">Alpha</span>
          </h3>
        </Link>
        <ul className="flex flex-col gap-6 px-6 mt-10 montserrat-medium text-[17px] sm:text-lg text-black/90">
          <Link href="/" onClick={toggleMenu}>
            <li className="hover-primary">Home</li>
          </Link>
          <hr className="border-t-[0.3px]" />
          <Link href="/our-story" onClick={toggleMenu}>
            <li className="hover-primary">Our Story</li>
          </Link>
          <hr className="border-t-[0.3px]" />
          <Link href="/products" onClick={toggleMenu}>
            <li className="hover-primary">Products</li>
          </Link>
          <hr className="border-t-[0.3px]" />
          <Link href="/contact" onClick={toggleMenu}>
            <li className="hover-primary">Contact Us</li>
          </Link>
          <hr className="border-t-[0.3px]" />
        </ul>
      </div>
    </>
  );
};

export default NavbarSM;
