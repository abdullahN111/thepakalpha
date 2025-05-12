"use client";

import { useState } from "react";
import Logo from "../../../public/images/logo.png";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/productData";

const NavbarSM = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const toggleSubMenu = (key) => {
    setSubMenuOpen((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <button onClick={toggleMenu}>
        <HiMenu className="color-white text-[26px] sm:text-3xl cursor-pointer" />
      </button>

      <div
        className={`
          fixed top-0 right-0 h-full w-[60%] md:w-[50%] bg-white shadow-lg z-50 
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
            className="mr-6"
          />
          <h3 className="relative text-[17px] sm:text-lg flex gap-1 sm:gap-2 items-center">
            <span className="font-bold italic text-primary text-base sm:text-[17px] absolute -top-[6px] -left-7">
              Pak
            </span>
            <span className="font-extrabold color-black">Alpha</span>
          </h3>
        </Link>

        <ul className="flex flex-col gap-4 px-6 mt-10 font-medium text-[17px] text-black/80">
          <Link href="/" onClick={toggleMenu}>
            <li className="hover-primary">Home</li>
          </Link>
          <hr className="border-t border-black/40 mb-2" />
          <li
            className="hover-primary cursor-pointer"
            onClick={() => toggleSubMenu("our-story")}
          >
            Our Story ▾
            <ul
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${
                  subMenuOpen === "our-story"
                    ? "max-h-60 opacity-100 mt-2 ml-5 text-base font-normal"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <li>
                <Link
                  href="/our-story"
                  onClick={toggleMenu}
                  className="block text-black/80 hover:text-[#0a73cd] py-2"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </li>
          <hr className="border-t border-black/40 mb-2" />
          <li
            className="hover-primary cursor-pointer"
            onClick={() => toggleSubMenu("products")}
          >
            Our Products ▾
            <ul
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${
                  subMenuOpen === "products"
                    ? "max-h-60 opacity-100 mt-2 ml-5 text-base font-normal"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              {productsData.map((product, index) => (
                <li key={index}>
                  <Link
                    href={`/product/${product.id}`}
                    onClick={toggleMenu}
                    className="block text-black/80 hover:text-[#0a73cd] py-2"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <hr className="border-t border-black/40 mb-2" />

          <Link href="/contact" onClick={toggleMenu}>
            <li className="hover-primary">Contact Us</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarSM;
