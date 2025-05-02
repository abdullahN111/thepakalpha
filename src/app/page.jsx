import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import MessageCEO from "@/components/sections/MessageCEO";
import Products from "@/components/sections/Products";

import FigureFacts from "@/components/sections/FigureFacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Products />
      <FigureFacts />
      <MessageCEO />
    </main>
  );
}
