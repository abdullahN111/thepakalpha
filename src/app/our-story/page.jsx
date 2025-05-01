import AboutUs from "@/components/sections/AboutUs";
import Hero from "@/components/sections/Hero";
import MessageCEO from "@/components/sections/MessageCEO";

import Banner from "../../../public/images/banner6.jpg";

const OurStory = () => {
  return (
    <main>
      <Hero
        height="h-[75vh]"
        banner={Banner}
        showButton={false}
        word1="Innovate."
        word2="Expand."
        word3="Excel."
        text="From manufacturing to precision printing — quality that goes beyond borders."
      />
      <AboutUs />
      <MessageCEO />
    </main>
  );
};

export default OurStory;
