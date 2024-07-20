import React from "react";
import Done from "@mui/icons-material/Done";

const Pricing = () => {
  const plans = [
    {
      title: "1 BHK",
      price: "6999",
      features: ["1 Room", "1 Kitchen", "1 Hall", "1 Washroom", "1 Misleneous"],
    },
    {
      title: "2 BHK",
      price: "10999",
      features: ["2 Room", "1 Kitchen", "1 Hall", "2 Washroom", "2 Misleneous"],
    },
    {
      title: "3 BHK",
      price: "15999",
      features: ["3 Room", "1 Kitchen", "2 Hall", "3 Washroom", "3 Misleneous"],
    },
    {
      title: "Custom",
      price: "APR",
      features: ["X Room", "X Kitchen", "X Hall", "X Washroom", "X Misleneous"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-16 px-4 md:px-10 lg:px-20">
      <div className="text-center font-poppins">
        <h2 className="text-2xl font-bold text-blue-600">Pricing Plan</h2>
        <h1 className="text-4xl font-bold mt-2">Choose Your Plan</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 font-poppins">
        {plans.map((plan, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="bg-blue-50 border-2 border-gray-100 p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-blue-700">{plan.title}</h3>

              <h2 className="text-3xl font-bold my-4">
                ₹{plan.price}
                <span className="text-xl font-normal"></span>
              </h2>
              <ul className="text-gray-600">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center mt-2"
                  >
                    {feature} <Done className="text-blue-500" />
                  </li>
                ))}
              </ul>
              <button className="mt-6 py-2 px-4 bg-gradient-to-r text-xl font-bold from-blue-400 to-blue-700 text-white rounded-md hover:bg-purple-800 transition duration-200">
                View Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
