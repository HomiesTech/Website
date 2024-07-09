import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
    toast.success("Sending...");
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwKfbObgSaNfsJ-r3F6We0R_h4RizINnZgePrRrdEbUHV2xjj_vnZ7qIbIrMRJeshin/exec",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.result === "success") {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(`Message failed to send: ${response.data.error}`);
      }
    } catch (error) {
      toast.error(`Message failed to send: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto py-20 px-5 mt-[5rem] pt-[5rem] h-[30rem] pb-[10rem]  bg-transparent">
      <div className="text-center bg-transparent">
        <h2 className="text-3xl font-bold text-blue-600 font-glory">
          Contact Us
        </h2>
        <h1 className="text-5xl font-bold mt-2 font-glory ">Get In Touch!</h1>
      </div>
      {status && (
        <p className="mt-4 text-center rounded-md text-red-500">{status}</p>
      )}
      <form
        className="max-w-xl mx-auto bg-transparent text-xl font-glory"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-blue-600 text-md font-bold mb-2 "
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
            className="shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-blue-600 text-md font-bold mb-2"
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
            className="shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-blue-600 text-md font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border-2 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className=" bg-gradient-to-r font-glory from-blue-300 to-blue-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
