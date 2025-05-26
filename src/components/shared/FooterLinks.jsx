import { productsData } from "@/data/productData";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-5 gap-8">
      <div>
        <h3 className="font-bold mb-4">Address</h3>
        <ul className="space-y-1 text-white/60 poppins-light">
          <li>Al-Kharj Industrial City,</li>
          <li>Modon, Riyadh,</li>
          <li>Saudia Arabia</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-4">Build Better</h3>
        <ul className="space-y-2 text-white/60 poppins-light">
          <li>
            <Link href="/our-story" aria-label="Our Story">Our Story</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">Our Products</h3>
        <ul className="space-y-2 text-white/60 poppins-light">
          {productsData.map((product, index) => (
            <li key={index}>
              <Link href={`/product/${product.id}`} aria-label={product.title}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4">Important Links</h3>
        <ul className="space-y-2 text-white/60 poppins-light">
          <li>
            <Link href="/our-story" aria-label="Our Story">Our Story</Link>
          </li>
      
          <li>
            <Link href="/contact" aria-label="Contact Us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
