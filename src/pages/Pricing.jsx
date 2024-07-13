import React, { useState } from "react";
import Done from "@mui/icons-material/Done";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      title: "Starter Plan",
      priceMonthly: "14.99",
      priceYearly: "149.99",
      features: [
        "HTML5 & CSS3",
        "Bootstrap v5",
        "Responsive Layout",
        "Cross-browser Support",
      ],
    },
    {
      title: "Advance Plan",
      priceMonthly: "24.99",
      priceYearly: "249.99",
      features: [
        "HTML5 & CSS3",
        "Bootstrap v5",
        "Responsive Layout",
        "Cross-browser Support",
      ],
    },
    {
      title: "Premium Plan",
      priceMonthly: "34.99",
      priceYearly: "349.99",
      features: [
        "HTML5 & CSS3",
        "Bootstrap v5",
        "Responsive Layout",
        "Cross-browser Support",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-16 px-4 md:px-10 lg:px-20">
      <div className="text-center font-poppins">
        <h2 className="text-2xl font-bold text-blue-600">Pricing Plan</h2>
        <h1 className="text-4xl font-bold mt-2">Choose Your Plan</h1>
      </div>
      <div className="flex justify-center mt-6 font-poppins text-xl">
        <button
          className={`py-2 px-4 rounded-l-full ${
            isMonthly ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-4 rounded-r-full ${
            !isMonthly ? "bg-blue-700 text-white" : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 font-poppins">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-blue-50 border-2 border-gray-100 p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out"
          >
            <h3 className="text-xl font-bold text-blue-700">{plan.title}</h3>
            <p className="text-gray-600">Powerful & Awesome Features</p>
            <h2 className="text-4xl font-bold my-4">
              ${isMonthly ? plan.priceMonthly : plan.priceYearly}
              <span className="text-xl font-normal">
                / {isMonthly ? "Month" : "Year"}
              </span>
            </h2>
            <ul className="text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex justify-between items-center mt-2">
                  {feature} <Done className="text-blue-500" />
                </li>
              ))}
            </ul>
            <button className="mt-6 py-2 px-4 bg-gradient-to-r text-xl font-bold from-blue-400 to-blue-700 text-white rounded-md hover:bg-purple-800 transition duration-200">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
