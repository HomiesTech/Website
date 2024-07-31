"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";
import img from "../assets/pricing.jpg"; // Adjust import as needed

const PricingPlan = () => {
  const [customUnits, setCustomUnits] = useState("");
  const customPricePerUnit = 3000;

  const handleCustomUnitsChange = (event) => {
    setCustomUnits(event.target.value);
  };

  const calculateCustomPrice = () => {
    const units = Number(customUnits);
    return units > 0 ? units * customPricePerUnit : "";
  };

  const plans = [
    {
      title: "1 BHK",
      price: "6999",
      units: "5",
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
      units: "8",
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
      units: "11",
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
      price: "",
      units: "",
      features: ["It includes"],
    },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-20"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-sky-500"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pricing Plan
      </motion.h2>
      <motion.hr
        className="border-sky-600 border-2 w-80 mx-auto mt-2 mb-12"
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 m-2 p-2 gap-0 ">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            className={`bg-white bg-opacity-75 rounded-lg shadow-lg w-full sm:w-80 md:w-80 lg:w-80 xl:w-80 transition-transform transform hover:scale-110 duration-500 ease-in-out flex flex-col ${
              plan.title === "Custom"
                ? "  border-sky-700 shadow-2xl text-black"
                : "  border-sky-700 shadow-2xl"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <div className="flex flex-row flex-1">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt={`${plan.title} image`}
                className="w-1/2 object-cover rounded-t-md"
              />

              <div className="p-4 w-1/2">
                {plan.title !== "Custom" && (
                  <>
                    <p className="text-md mb-4 font-bold">
                      No of Units:
                      <span className="text-sky-500"> {plan.units}</span>
                    </p>
                    <ul className="mb-4">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center text-sm mb-1 text-gray-700"
                        >
                          {feature}
                          <DoneIcon className="text-sky-500" />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {plan.title === "Custom" && (
                  <>
                    <p className="text-md mb-4 font-bold">
                      No of Units:{" "}
                      <span className="text-sky-500">{customUnits}</span>
                    </p>
                    <input
                      type="number"
                      value={customUnits}
                      onChange={handleCustomUnitsChange}
                      placeholder="Enter Units"
                      className="w-full mb-4 p-2 border-2 rounded-lg"
                      min="0"
                    />

                    <p className="text-md mb-4 italic ">
                      <span className="text-sky-700 justify-items-center">
                        ~Tailor your plan to fit your unique requirements and
                        preferences.
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="bg-sky-500 p-2 text-white rounded-b-lg mt-auto ">
              {plan.title === "Custom" ? (
                <div className="items-center flex flex-row justify-between px-4">
                  <h2 className="text-md font-bold mt-2 mb-2 ">Custom Plan</h2>
                  <h2 className="text-4xl font-bold mt-2 mb-2 text-white">
                    ₹{calculateCustomPrice() || "0"}
                  </h2>
                </div>
              ) : (
                <div className="items-center flex flex-row justify-between px-4">
                  <h2 className="text-md font-bold mt-2 mb-2">{plan.title}</h2>
                  <h2 className="text-4xl font-bold mt-2 mb-2  text-white">
                    ₹{plan.price}
                  </h2>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingPlan;
