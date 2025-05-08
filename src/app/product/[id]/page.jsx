"use client";

import Banner from "@/components/sections/Banner";
import Banner6 from "../../../../public/images/banner7.png";
import ProductDetail from "@/components/sections/ProductDetail";
import ProductInstructions from "@/components/sections/ProductInstructions";
import { productsData } from "@/data/productData";
import { useParams } from "next/navigation";

const Products = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === Number(id));
  return (
    <main>
      <Banner banner={Banner6} title={product.title} />
      <ProductDetail />
      <ProductInstructions titles={product.titles} content={product.content} />
    </main>
  );
};

export default Products;
