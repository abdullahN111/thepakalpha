import Link from "next/link";

const NavbarLG = () => {
  return (
    <nav>
      <ul className="flex items-center poppins-medium text-[17px]">
        <Link href="/">
          <li className="hover-primary py-[6px] px-5 lg:px-6">Home</li>
        </Link>
        <li className="relative group cursor-pointer hover:text-black/80 rounded-tl-[25px] hover:bg-white py-[6px] px-5 lg:px-6">
          <span className="inline-block py-2 group-hover:text-[#0a73cd]">
            Our Story ▾
          </span>
          <hr className="absolute left-0 border-t-3 w-full border-transparent group-hover:border-[#0a73cd]" />
          <ul
            className="absolute left-0 py-2 top-full w-full bg-white shadow-xl
      opacity-0 scale-y-95 translate-y-2 pointer-events-none 
      group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50 text-[15px]"
          >
            <li>
              <Link
                href="/our-story"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Our Story
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
            <li>
              <Link
                href="#story"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Who are we
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
            <li>
              <Link
                href="#message"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Message from CEO
              </Link>
            </li>
          </ul>
        </li>

        <li className="relative group cursor-pointer hover:text-black/80 rounded-tl-[25px] hover:bg-white py-[6px] px-5 lg:px-6">
          <span className="inline-block py-2 group-hover:text-[#0a73cd]">
            Our Products ▾
          </span>
          <hr className="absolute left-0 border-t-3 w-full border-transparent group-hover:border-[#0a73cd]" />
          <ul
            className="absolute left-0 py-2 top-full w-full bg-white shadow-xl
      opacity-0 scale-y-95 translate-y-2 pointer-events-none 
      group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 
      group-hover:pointer-events-auto transition-all duration-300 ease-in-out z-50 text-[15px]"
          >
            <li>
              <Link
                href="#products"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Tile Grout
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
            <li>
              <Link
                href="#products"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Tile Bond
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
            <li>
              <Link
                href="#products"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                Wall Putty
              </Link>
            </li>
            <hr className="border-t border-black/40 mx-4 mb-2" />
            <li>
              <Link
                href="#products"
                className="block px-5 lg:px-6 py-2 hover-primary"
              >
                All Products
              </Link>
            </li>
          </ul>
        </li>
        <Link href="/contact">
          <li className="hover-primary py-[6px] px-5 lg:px-6">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarLG;
