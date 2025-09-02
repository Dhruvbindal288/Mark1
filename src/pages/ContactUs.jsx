import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "+918570848341"; 
    const text = `Hello, my name is ${formData.name}. I have a query: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); 
  };

  return (
    <div id="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 to-green-300 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          Contact Us via WhatsApp
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-green-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
        />

        <textarea
          name="message"
          placeholder="Your Query"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="border border-green-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-500 transition"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}
