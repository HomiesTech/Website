import React from "react";
import "tw-elements";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LayersIcon from "@mui/icons-material/Layers";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShieldIcon from "@mui/icons-material/Shield";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DoneIcon from "@mui/icons-material/Done";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Carousel from "./Carousel";

import InstallMobileIcon from "@mui/icons-material/InstallMobile";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Person2Icon from "@mui/icons-material/Person2";
import WifiIcon from "@mui/icons-material/Wifi";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import RecommendIcon from "@mui/icons-material/Recommend";
export default function Features() {
  return (
    <section className="mt-2 pt-[1.5rem] pb-[1.5rem] bg-white">
      <div className="mx-auto align-middle justify-center pt-2 md:pt-16 px-4 md:px-0">
        <h1 className="text-2xl text-black text-center font-bold uppercase font-poppins">
          Features
        </h1>
        <hr className="border-blue-600 border-2 w-32 mx-auto mt-2 mb-6" />
        <h1 className="text-4xl text-black text-center font-bold uppercase font-poppins">
          Awesome Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10">
        {[
          {
            Icon: AccessibilityIcon,
            title: "Easily Accessible",
            description:
              "Our product is easily accessible and easily installable as per the customer requirements",
          },
          {
            Icon: Person2Icon,
            title: "Editable Profile",
            description:
              "The customer data (includes SignUp, Login, Personal details) are easily editable at the users end",
          },
          {
            Icon: WifiIcon,
            title: "Multiple Connection",
            description:
              "Multiple connection were also supported by the app and the product as per the user needs",
          },
          {
            Icon: Diversity1Icon,
            title: "User Friendly",
            description:
              "The app is user friendly and can be accessible by anyone in the house very easily. Just a tap and go          ",
          },
          {
            Icon: PhoneAndroidIcon,
            title: "Customizable Interface",
            description:
              "The Interface is customizable as per the user’s need. It will help out the user to name the tabs for the devices as per the user’s need",
          },
          {
            Icon: RecommendIcon,
            title: "24*7 Support System",
            description:
              "If any problem occur in between or after installation of the product our 24*7 support system will help you out. Our support team will look into the matter of the issue and then a technician will arrive to fix the issue",
          },
        ].map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="rounded-md bg-blue-50 flex flex-col items-center p-4 transition-transform transform hover:scale-110 duration-500 ease-in-out "
          >
            <div className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
              <Icon />
            </div>
            <h1 className="text-xl font-bold text-center">{title}</h1>
            <p className="m-2 p-2 text-gray-500  text-justify">{description}</p>
          </div>
        ))}
      </div>
      {/* ScreenShot Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-10 p-10 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/3">
          <p className="text-blue-600 font-bold text-2xl m-2 font-poppins">
            ScreenShot
          </p>
          <h1 className="text-2xl lg:text-4xl text-black font-bold m-2 font-poppins">
            User Friendly Interface And Very Easy To Use Fitness App
          </h1>
          <p className="text-gray-500 m-2 p-4 font-poppins text-justify">
            The application is easy to use can be understand by anyone in the
            house. In the interface you can change the background of the
            specific room and you can select themes from the given option.
            Everything is easily accessible and pre-defined in the application
            and the product.
          </p>
          <p className="text-gray-500 m-2 p-2 font-poppins">
            <DoneIcon className="text-blue-600" /> Diam dolor diam ipsum et
            tempor sit
          </p>
          <p className="text-gray-500 m-2 p-2 font-poppins">
            <DoneIcon className="text-blue-600" /> Aliqu diam amet diam et eos
            labore
          </p>
          <p className="text-gray-500 m-2 p-2 font-poppins">
            <DoneIcon className="text-blue-600" /> Clita erat ipsum et lorem et
            sit
          </p>
          <div className="pt-12 md:pt-16 p-6">
            <button className="px-8 py-4 bg-gradient-to-r font-poppins text-xl font-bold from-blue-400 to-blue-700 text-black text-center rounded-md">
              Read More
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3 relative">
          <Carousel />
        </div>
      </div>
      {/* 3 Steps Section */}
      <div className="flex flex-col items-center justify-center p-10 m-10">
        <div>
          <p className="text-xl text-blue-600 font-flory font-bold text-center">
            How It Works
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold text-center font-poppins">
            3 Easy Steps
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-2 p-2 mt-8 pt-8">
          {[
            {
              Icon: InstallMobileIcon,
              title: "Install The App",
              description:
                "The app is easy to use as you just have to download the app from the website/app store/playstore create an account with username and password.Now connect the app to the dedicated WIFI and discover the device",
            },
            {
              Icon: AccountBoxIcon,
              title: "Set Up Your Profile",
              description:
                " Boom, you are ready to go now your app and device are paired successfully now you can control your home through our app.After the connection you will see rooms as per the devices at your home",
            },
            {
              Icon: DoneIcon,
              title: "Enjoy the Features",
              description:
                "Long hold them and you can now change the names of the devices as per your need. Now as many appliances are connected with device will be shown on the room section.While you are in the room section u can see the appliances, Tap on them and See the magic.",
            },
          ].map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="relative bg-blue-50 p-6 rounded-md flex flex-col items-center"
            >
              <div className="absolute -top-10 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon className="text-white text-4xl " />
              </div>
              <h1 className="text-xl font-bold text-center mt-10">{title}</h1>
              <p className="text-gray-500 text-center text-justify p-2 m-2 ">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
