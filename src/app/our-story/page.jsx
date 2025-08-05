import AboutUs from "@/components/sections/AboutUs";
import Banner from "@/components/sections/Banner";
import MessageCEO from "@/components/sections/MessageCEO";

import Banner6 from "../../../public/images/banner6.jpg";
import FigureFacts from "@/components/sections/OurProcess";

const OurStory = () => {
  return (
    <main>
      <Banner banner={Banner6} title="Our Story" />
      <AboutUs />
      <FigureFacts showButton={false} />
      <MessageCEO />
    </main>
  );
};

export default OurStory;
