import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxDs8gvFiYyJuZtY0_Ph_3HMUt_4C0QSWO9Kbcm8n8wm4IY3YcCz5D2HtgZrKFjTbnF/exec",
        formData
      );
      if (response.data.result === "success") {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Message failed to send.");
      }
    } catch (error) {
      setStatus("Message failed to send.");
    }
  };

  return (
    <div className="container mx-auto py-5 px-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-purple-700">Contact Us</h2>
        <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
      </div>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-purple-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border border-purple-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-purple-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border border-purple-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-purple-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border border-purple-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
        {status && <p className="mt-4 text-center text-red-500">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
