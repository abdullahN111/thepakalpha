"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavbarLG from "./NavbarLG";
import NavbarSM from "./NavbarSM";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out max-width mx-auto 
        ${scrolled ? "bg-black/60 shadow-md" : "bg-transparent"}
        text-white`}
    >
      <div className="flex justify-between items-center py-5 px-2 sm:px-8 h-18">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Pak Alpha Manufacturing"
            width={80}
            height={80}
          />
          <h3 className="text-lg xs:text-xl sm:text-[22px] flex gap-[5px] sm:gap-2 items-center">
            <span className="poppins-semibold-italic text-primary">Pak</span>
            <span className="poppins-extrabold">Alpha</span>
          </h3>
        </Link>
        <div className="hidden lg:block mr-10">
          <NavbarLG />
        </div>
        <div className="block lg:hidden mr-4 sm:mr-8">
          <NavbarSM />
        </div>
      </div>
    </header>
  );
};

export default Header;
