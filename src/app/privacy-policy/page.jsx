import Banner from "@/components/sections/Banner";
import Banner17 from "../../../public/images/banner17.jpg";
import { privacyPolicyData } from "@/data/data";

const page = () => {
  return (
    <main>
      <Banner banner={Banner17} title="Privacy Policy" />
      <section className="max-w-4xl px-6 py-12">
        {privacyPolicyData.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-[22px] xsx:text-2xl font-semibold text-gray-800 mb-3 xsx:mb-4">
              {section.title}
            </h2>
            <p className="text-[15px] xsx:text-base text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
