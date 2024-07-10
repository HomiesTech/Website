import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatab = new FormData(formRef.current);
    fetch(
      "https://script.google.com/macros/s/AKfycbwktpOwrY7C2zFz9HZZmtHyDqPm8fKENnbtDi20zP3nHTG6C8HtkLeiYgiWmf11cC-s/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then(() => {
        toast.success(
          "Your message was successfully sent to the Google Sheet database!"
        );
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("There was an error sending your message.");
      });
  };

  return (
    <div className="container mx-auto py-20 px-5 mt-[5rem] pt-[5rem] h-[30rem] pb-[10rem] bg-transparent">
      <ToastContainer />
      <div className="text-center bg-transparent">
        <h2 className="text-3xl font-bold text-blue-600 font-glory">
          Contact Us
        </h2>
        <h1 className="text-5xl font-bold mt-2 font-glory">Get In Touch!</h1>
      </div>
      <form
        ref={formRef}
        className="max-w-xl mx-auto bg-transparent text-xl font-glory"
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-blue-600 text-md font-bold mb-2"
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
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-gradient-to-r font-glory from-blue-400 to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
