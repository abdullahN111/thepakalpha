"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Logo from "../../../public/images/logo.png";
import FooterLinks from "./FooterLinks";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const { message } = await res.json(); 

    toast(message === "Success"
      ? "✅ Email submitted!"
      : message === "Email already submitted"
      ? "⚠️ Email already exists!"
      : "❌ Something went wrong"
    );

    if (message === "Success") setEmail("");
  } catch (err) {
    toast.error("❌ Network error. Try again.");
  }
};


  return (
    <footer className="max-width mx-auto bg-black text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10 px-6 md:px-20">
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Pak Alpha Manufacturing"
          >
            <Image
              src={Logo}
              alt="Pak Alpha Manufacturing"
              width={70}
              height={70}
              className="mr-5"
              priority
              loading="eager"
            />
            <h3 className="relative text-lg sm:text-[22px] flex items-center">
              <span className="font-bold italic text-primary text-[16px] sm:text-[17px] absolute -top-[6px] -left-8">
                Pak
              </span>
              <span className="font-bold">Alpha</span>
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
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
              area-label="Instagram"
              target="_blank"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
              area-label="Facebook"
              target="_blank"
            >
              <FaFacebook size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
              area-label="X Twitter"
              target="_blank"
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="#"
              className="hover:bg-[#0a73cd] p-2 rounded-full transition duration-300"
              area-label="YouTube"
              target="_blank"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-[17px] sm:text-lg font-bold mb-4 md:mb-2">
            Stay Updated!
          </h2>
          <form className="flex" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm md:text-base w-[160px] xs:w-[180px] xsx:w-[220px] md:w-[250px] px-3 xs:px-[14px] md:px-4 py-2 xs:py-[10px] lg:py-3 bg-white text-black/80 focus:outline-none rounded-bl-[20px]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="px-4 xs:px-5 lg:px-6 py-2 xs:py-[10px] lg:py-3 bg-primary text-white/80 transition duration-300 rounded-tr-[20px] cursor-pointer hover:bg-[#0a72cde6] poppins-medium"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <FooterLinks />

      <div className="border-t border-gray-700 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between text-white/60 poppins-light text-sm">
        <div className="flex flex-col md:flex-row gap-2 items-center space-x-2">
          <span>© Copyright Pak Alpha 2025.</span>
          <span>All Rights Reserved.</span>
        </div>
        <div className="flex space-x-6">
          <Link
            href="/privacy-policy"
            className="flex items-center gap-1"
            area-label="Privacy Policy"
          >
            <span className="text-2xl">&#x2022; </span>{" "}
            <span>Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
