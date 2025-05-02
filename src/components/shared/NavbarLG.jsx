import Link from "next/link";

const NavbarLG = () => {
  return (
    <nav>
      <ul className="flex items-center montserrat-medium space-x-6 lg:space-x-8 text-lg">
        <Link href="/">
          <li className="hover-primary">Home</li>
        </Link>
        <Link href="/our-story">
          <li className="hover-primary">Our Story</li>
        </Link>
        <Link href="/products">
          <li className="hover-primary">Products</li>
        </Link>
        <Link href="/contact">
          <li className="hover-primary">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarLG;
