import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import MessageCEO from "@/components/sections/MessageCEO";
import Products from "@/components/sections/Products";

import Banner from "../../public/images/banner3.png";
import FigureFacts from "@/components/sections/FigureFacts";

export default function Home() {
  return (
    <main>
      <Hero
        height="h-screen"
        banner={Banner}
        word1="Build."
        word2="Bond."
        word3="Beautify."
        text="Tile bond, grout, wall putty, and precision paper cutting & printing —
          all under one roof."
      />
      <AboutUs />
      <Products />
      <FigureFacts />
      <MessageCEO />
    </main>
  );
}
