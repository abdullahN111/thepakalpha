"use client";

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="max-width mx-auto py-12 px-4 bg-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border border-[#0a73cd]/60 rounded-md flex flex-col justify-center gap-5 py-10 px-5 sm:px-8 shadow-md"
      >
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-base sm:text-[17px] mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write something..."
            rows={6}
            className="p-[10px] sm:p-3 border border-[#0a73cd]/50 rounded-sm text-[15px] sm:text-base font-normal text-black/60 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="my-4 rounded-md bg-primary text-white py-3 text-base font-medium cursor-pointer hover:bg-[#0a72cde6]"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
        {status === "success" && (
          <p className="text-green-600 mt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-2">Failed to send. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
