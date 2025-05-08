"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { productsData } from "@/data/productData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="max-width mx-auto py-12 px-6">
        <p className="text-center text-black/80 text-2xl">Product not found.</p>
      </section>
    );
  }
  return (
    <section className="max-width mx-auto py-12 px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10">
        <div className="basis-[40%] w-full max-w-md lg:max-w-none">
          <div className="relative w-full aspect-[6/6]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-tr-[30px] rounded-bl-[30px] shadow-md"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 basis-[55%]">
          <h2 className="text-primary text-3xl sm:text-4xl uppercase font-bold mb-3">
            {product.title}
          </h2>
          <p className="text-lg sm:text-xl font-bold text-black/80">
            {product.tagline}
          </p>
          <p className="text-lg sm:text-xl leading-8 lgs:leading-9 text-black/70">
            {product.description}
          </p>
          <p className="text-lg sm:text-xl leading-8 lgs:leading-9 text-black/70">
            {product.advantage}
          </p>
        </div>
      </div>
      ;
    </section>
  );
};

export default ProductDetail;
