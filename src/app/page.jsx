import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import MessageCEO from "@/components/sections/MessageCEO";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Products />
      <MessageCEO />
    </div>
  );
}
