"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";

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
      features: [
        "It includes",
        "Whatever you want",
        "to optimize in your home",
      ],
    },
  ];

  const backgroundImageUrl =
    "https://png.pngtree.com/png-clipart/20221128/ourmid/pngtree-white-waves-paper-cut-png-image_6483346.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white py-12"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-2 text-sky-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Pricing Plan
      </motion.h2>
      <motion.hr
        className="border-sky-600 border-2 w-80 mx-auto mt-2 mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 m-2 p-2">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.title}
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`bg-white bg-opacity-75 rounded-lg shadow-lg p-8 w-full sm:w-80 md:w-80 lg:w-80 xl:w-80 transition-transform transform hover:scale-110 duration-500 ease-in-out ${
              plan.title === "Custom"
                ? " border-l-2 border-r-2 border-sky-700 bg-gradient-to-t from-sky-300 via-white to-sky-100 shadow-lg text-black"
                : " border-l-2 border-r-2 border-sky-700 shadow-xl bg-gradient-to-t from-sky-300 via-white to-sky-100"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-sky-700">
              {plan.title}
            </h3>
            {plan.title !== "Custom" && (
              <>
                <h2 className="text-4xl font-bold my-6 text-sky-500">
                  ₹{plan.price}
                </h2>
                <p className="text-md mb-4 font-bold">
                  No of Units:{" "}
                  <span className="text-sky-500">{plan.units}</span>
                </p>
                <ul className="mb-12">
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
                {customUnits > 0 && (
                  <h2 className="text-4xl font-bold my-4 text-sky-500">
                    ₹{calculateCustomPrice()}
                  </h2>
                )}
                <input
                  type="number"
                  value={customUnits}
                  onChange={handleCustomUnitsChange}
                  placeholder="Enter number of units"
                  className="w-full mb-4 p-2 border-2 rounded-lg"
                  min="0"
                />
                <p className="text-md mb-4 font-bold">
                  No of Units:{" "}
                  <span className="text-sky-500">{customUnits}</span>
                </p>
                <p className="text-md mb-4 italic">
                  <span className="text-sky-700">
                    ~This will include any Room, Hall, Kitchen Whatever you want
                    to automate in your home
                  </span>
                </p>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingPlan;
