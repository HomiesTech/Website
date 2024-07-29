"use client";

import React from "react";
import { motion } from "framer-motion";
import "tw-elements";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DoneIcon from "@mui/icons-material/Done";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Person2Icon from "@mui/icons-material/Person2";
import WifiIcon from "@mui/icons-material/Wifi";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import RecommendIcon from "@mui/icons-material/Recommend";

const Features = () => {
  const featuresData = [
    {
      Icon: AccessibilityIcon,
      title: "Easily Accessible",
      description:
        "Manage all home functions conveniently through our user-friendly mobile app, ensuring effortless control at your fingertips",
    },
    {
      Icon: Person2Icon,
      title: "Editable Profile",
      description:
        "Personalize your smart home experience by customizing room names and other details with ease, adapting to your preferences seamlessly.",
    },
    {
      Icon: WifiIcon,
      title: "Multiple Connection",
      description:
        "Seamlessly integrate and control every room in your home via robust WiFi connectivity, enhancing accessibility and convenience.",
    },
    {
      Icon: Diversity1Icon,
      title: "User Friendly",
      description:
        "Designed for simplicity, our system ensures that anyone can operate and enjoy the benefits of smart home technology without complexity",
    },
    {
      Icon: PhoneAndroidIcon,
      title: "Customizable Interface",
      description:
        "Tailor your home environment with personalized backgrounds and icons for each room within our intuitive app, reflecting your unique style and needs.",
    },
    {
      Icon: RecommendIcon,
      title: "Support System",
      description:
        "Access prompt assistance with our dedicated support system, offering reliable help via email and phone directly from the app whenever you need it.",
    },
  ];

  const stepsData = [
    {
      Icon: InstallMobileIcon,
      title: "Install The App",
      description:
        "The app is easy to use as you just have to download the app from the website/app store/playstore create an account with username and password. Now connect the app to the dedicated WIFI and discover the device",
    },
    {
      Icon: AccountBoxIcon,
      title: "Set Up Your Profile",
      description:
        "Boom, you are ready to go now your app and device are paired successfully now you can control your home through our app. After the connection you will see rooms as per the devices at your home",
    },
    {
      Icon: DoneIcon,
      title: "Enjoy the Features",
      description:
        "Long hold them and you can now change the names of the devices as per your need. Now as many appliances are connected with the device will be shown on the room section. While you are in the room section you can see the appliances, Tap on them and See the magic.",
    },
  ];

  return (
    <section className="mt-2 pt-[1.5rem] pb-[1.5rem] bg-transparent ">
      <div className="mx-auto align-middle justify-center pt-2 md:pt-16 px-4 md:px-0">
        <motion.h1
          className="text-2xl text-black text-center font-bold uppercase font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h1>
        <motion.hr
          className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "32px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.h1
          className="text-3xl text-sky-500 text-center font-bold uppercase font-poppins"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Awesome Features
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">
        {featuresData.map(({ Icon, title, description }, index) => (
          <motion.div
            key={index}
            className="rounded-md bg-blue-50 flex flex-col items-center p-4  hover:border-b-2 hover:border-sky-400 hover:shadow-md hover:shadow-sky-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="bg-gradient-to-r from-sky-300 to-sky-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
              <Icon />
            </div>
            <motion.h1
              className="text-xl font-bold text-center"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="m-2 p-2 text-gray-500 text-justify"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {description}
            </motion.p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center p-10 m-10">
        <div>
          <motion.p
            className="text-xl text-sky-500 font-flory font-bold text-center"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.p>
          <motion.h1
            className="text-2xl lg:text-4xl font-bold text-center font-poppins"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            3 Easy Steps
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-2 p-2 mt-8 pt-8">
          {stepsData.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="relative bg-blue-50 p-6 rounded-md flex flex-col items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon className="text-white text-4xl" />
              </div>
              <motion.h1
                className="text-xl font-bold text-center mt-10"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {title}
              </motion.h1>
              {/* <motion.p
                className="text-gray-500 text-justify p-2 m-2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {description}
              </motion.p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
