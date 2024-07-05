import React from "react";
import { FaStar } from "react-icons/fa";
import "tw-elements";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    image: "https://via.placeholder.com/85",
    rating: 5,
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    image: "https://via.placeholder.com/85",
    rating: 5,
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 3,
    name: "Client Name",
    profession: "Profession",
    image: "https://via.placeholder.com/85",
    rating: 5,
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 4,
    name: "Client Name",
    profession: "Profession",
    image: "https://via.placeholder.com/85",
    rating: 5,
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

const Testimonial = () => {
  return (
    <div className="container mx-auto py-5 px-5" id="review">
      <div className="text-center mb-12">
        <h5 className="text-purple-600 text-lg font-semibold">Testimonial</h5>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-5">
          What Say Our Clients!
        </h1>
      </div>
      <div className="flex justify-center items-center overflow-hidden">
        <div className="flex space-x-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-item rounded p-4 bg-white shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  className="img-fluid bg-white rounded-full flex-shrink-0 p-1"
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{ width: "85px", height: "85px" }}
                />
                <div className="ml-4">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <p className="mb-1">{testimonial.profession}</p>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mb-0">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
