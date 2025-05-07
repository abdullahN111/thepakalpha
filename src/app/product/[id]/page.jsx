import Banner from "@/components/sections/Banner";
import Banner6 from "../../../../public/images/banner7.png";
import ProductDetail from "@/components/sections/ProductDetail";
import ProductInstructions from "@/components/sections/ProductInstructions";

const Products = () => {
  return (
    <main>
      <Banner banner={Banner6} title="Product" />
      <ProductDetail />
      <ProductInstructions />
    </main>
  );
};

export default Products;
