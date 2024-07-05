import React, { useState } from "react";

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, we will send you an email with the tracking number and a link to track your order.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 24 hours of placing it. Please contact our customer service team for assistance.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to many countries around the world. Shipping charges and delivery times vary depending on the destination.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, and Apple Pay.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="m-[2rem] p-[2rem]">
      <div className="container mx-auto py-5 px-5">
        <div className="text-center mb-12">
          <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
            <h1 className="text-3xl text-black text-center font-bold uppercase">
              Frequently Asked Questions
            </h1>
            <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
            <div className="text-center mx-auto max-w-2xl text-gray-500">
              <p>
                Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
                viverra. Fusce sit amet lorem faucibus, vestibulum ante in,
                pharetra ante.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg rounded-lg"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-white">
                    {item.question}
                  </h2>

                  <span className="text-white">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <hr className="border-white"></hr>
                  <p className="text-white">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
