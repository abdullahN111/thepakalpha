"use client";

import { productsData } from "@/data/productData";
import Link from "next/link";

const NavbarLG = () => {
  return (
    <nav>
      <ul className="flex items-center font-normal text-base">
        <Link href="/" aria-label="Home">
          <li className="hover-primary py-[6px] px-4 lg:px-5">Home</li>
        </Link>
        <li className="relative group cursor-pointer hover:text-black/80 rounded-tl-[25px] hover:bg-white py-[6px] px-4 lg:px-5">
          <span className="inline-block py-2 group-hover:text-[#0a73cd]">
            Our Story ▾
          </span>
          <hr className="absolute left-0 border-t-3 w-full border-transparent group-hover:border-[#0a73cd]" />
          <ul
            className="absolute left-0 py-2 top-full w-full bg-white shadow-xl
      opacity-0 scale-y-95 translate-y-2 pointer-events-none 
      group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50 text-[15px] font-normal"
          >
            <li>
              <Link
                href="/our-story"
                className="block px-5 lg:px-6 py-2 hover-primary"
                aria-label="Our Story"
              >
                Our Story
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
          </ul>
        </li>

        <li className="relative group cursor-pointer hover:text-black/80 rounded-tl-[25px] hover:bg-white py-[6px] px-4 lg:px-5">
          <span className="inline-block py-2 group-hover:text-[#0a73cd]">
            Our Products ▾
          </span>
          <hr className="absolute left-0 border-t-3 w-full border-transparent group-hover:border-[#0a73cd]" />
          <ul
            className="absolute left-0 py-2 top-full w-full bg-white shadow-xl
      opacity-0 scale-y-95 translate-y-2 pointer-events-none 
      group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50 text-[15px] font-normal"
          >
            {productsData.map((product, index) => (
              <ul key={index}>
                <li>
                  <Link
                    href={`/product/${product.id}`}
                    className="block px-5 lg:px-6 py-2 hover-primary"
                    aria-label={product.title}
                  >
                    {product.title}
                  </Link>
                </li>
                <hr className="border-t border-black/40 mx-4 mb-2" />
              </ul>
            ))}
          </ul>
        </li>
        <Link href="/contact" aria-label="Contact Us">
          <li className="hover-primary py-[6px] px-4 lg:px-5">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarLG;
