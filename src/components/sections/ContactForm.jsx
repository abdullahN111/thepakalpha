const ContactForm = () => {
  return (
    <section className="max-width mx-auto py-12 px-4 bg-white">
      <form
        action=""
        className="max-w-2xl mx-auto border border-[#0a73cd]/60 rounded-md flex flex-col justify-center gap-5 py-10 px-5 sm:px-8 shadow-md"
      >
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Email
          </label>
          <input
            type="email"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Phone
          </label>
          <input
            type="tel"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
            placeholder="Enter your phone"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Message
          </label>
          <textarea
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
            placeholder="Write something..."
            rows={6}
          />
        </div>
        <button className="my-4 rounded-md bg-primary text-white py-3 text-base font-medium cursor-pointer hover:bg-[#0a72cde6]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
