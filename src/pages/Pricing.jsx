import React, { useState } from "react";
import Done from "@mui/icons-material/Done";

const Pricing = () => {
  const plans = [
    {
      title: "1 BHK",
      price: "6999",
      features: [
        "1 Room",
        "1 Kitchen",
        "1 Hall",
        "1 Washroom",
        "1 Miscellaneous",
      ],
    },
    {
      title: "2 BHK",
      price: "10999",
      features: [
        "2 Room",
        "1 Kitchen",
        "1 Hall",
        "2 Washroom",
        "2 Miscellaneous",
      ],
    },
    {
      title: "3 BHK",
      price: "15999",
      features: [
        "3 Room",
        "1 Kitchen",
        "2 Hall",
        "3 Washroom",
        "3 Miscellaneous",
      ],
    },
    {
      title: "Custom",
      price: "APR",
      features: [
        "X Room",
        "X Kitchen",
        "X Hall",
        "X Washroom",
        "X Miscellaneous",
      ],
    },
  ];

  const [customUnits, setCustomUnits] = useState("");
  const customPricePerUnit = 2000; // Example price per unit

  const handleCustomUnitsChange = (event) => {
    setCustomUnits(event.target.value);
  };

  const calculateCustomPrice = () => {
    const units = Number(customUnits);
    return units > 0 ? units * customPricePerUnit : "";
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 px-4 md:px-10 lg:px-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/colorful-wave-with-black-background_575980-2271.jpg')`, // Use your hero image here
          filter: "blur(10px)", // Increase blur effect for a more dramatic look
        }}
      ></div>
      <div className="text-center font-poppins">
        <h2 className="text-2xl font-bold text-sky-500">Pricing Plan</h2>
        <h1 className="text-4xl font-bold mt-2 text-orange-500">
          Choose Your Plan
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-10 font-poppins">
        {plans.map((plan, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-blue-50 border-2 shadow-sky-500 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 ease-in-out border-sky-500 w-[15rem] h-[25rem] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-sky-500">{plan.title}</h3>
                {plan.title === "Custom" ? (
                  <>
                    <input
                      type="number"
                      value={customUnits}
                      onChange={handleCustomUnitsChange}
                      placeholder="Enter number of units"
                      className="w-full mt-4 p-2 border-2 rounded-lg"
                      min="0"
                    />
                    {customUnits > 0 && (
                      <h2 className="text-3xl font-bold my-4 text-orange-500">
                        ₹{calculateCustomPrice()}
                        <span className="text-xl font-normal"></span>
                      </h2>
                    )}
                  </>
                ) : (
                  <h2 className="text-3xl font-bold my-6 text-orange-500">
                    ₹{plan.price}
                    <span className="text-xl font-normal"></span>
                  </h2>
                )}
                <ul className="text-gray-600">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center mt-2"
                    >
                      {feature} <Done className="text-amber-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
