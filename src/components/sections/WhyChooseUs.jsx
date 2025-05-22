import Banner18 from "../../../public/images/banner18.jpg";

const WhyChooseUs = () => {
  return (
    <section
      className="max-width mx-auto py-12 px-6 bg-[#0a73cd]/10 relative w-full overflow-hidden"
      id="why-choose-us"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Banner18.src})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="flex items-center-justify-center py-12">

      </div>
    </section>
  );
};

export default WhyChooseUs;
