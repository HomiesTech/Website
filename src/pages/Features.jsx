import React from "react";
import "tw-elements";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LayersIcon from "@mui/icons-material/Layers";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShieldIcon from "@mui/icons-material/Shield";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DoneIcon from "@mui/icons-material/Done";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Carousel from "./Carousel";

export default function Features() {
  return (
    <section className="mt-2 pt-[1.5rem] pb-[1.5rem] bg-white">
      <div className="mx-auto align-middle justify-center pt-2 md:pt-16 px-4 md:px-0">
        <h1 className="text-2xl text-black text-center font-bold uppercase font-glory">
          Features
        </h1>
        <hr className="border-blue-600 border-2 w-32 mx-auto mt-2 mb-6" />
        <h1 className="text-4xl text-black text-center font-bold uppercase font-glory">
          Awesome Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-10">
        {[
          { Icon: VisibilityIcon, title: "High Resolution" },
          { Icon: LayersIcon, title: "Retina Ready" },
          { Icon: BorderColorIcon, title: "Editable Data" },
          { Icon: ShieldIcon, title: "Fully Secured" },
          { Icon: CloudIcon, title: "Cloud Storage" },
          { Icon: PhoneAndroidIcon, title: "Fully Responsive" },
        ].map(({ Icon, title }, index) => (
          <div
            key={index}
            className="rounded-md bg-blue-50 flex flex-col p-4 transition-transform transform hover:scale-110 duration-500 ease-in-out"
          >
            <div className="bg-gradient-to-r from-blue-300 to-blue-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
              <Icon />
            </div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="m-2 p-2 text-gray-400">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem
            </p>
          </div>
        ))}
      </div>
      {/* ScreenShot Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-10 p-10 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-2/3">
          <p className="text-blue-600 font-bold text-2xl m-2 font-glory">
            ScreenShot
          </p>
          <h1 className="text-3xl lg:text-5xl text-black font-bold m-2 font-glory">
            User Friendly Interface And Very Easy To Use Fitness App
          </h1>
          <p className="text-gray-500 m-2 p-4 font-poppins">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo eirmod magna dolore erat amet
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
            <button className="px-8 py-4 bg-gradient-to-r font-glory text-xl font-bold from-blue-300 to-blue-600 text-black text-center rounded-md">
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
          <h1 className="text-3xl lg:text-5xl font-bold text-center font-glory">
            3 Easy Steps
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-2 p-2 mt-8 pt-8">
          {[
            { Icon: SettingsIcon, title: "Install The App" },
            { Icon: AccountBoxIcon, title: "Set Up Your Profile" },
            { Icon: DoneIcon, title: "Enjoy the Features" },
          ].map(({ Icon, title }, index) => (
            <div
              key={index}
              className="relative bg-blue-50 p-6 rounded-md flex flex-col items-center"
            >
              <div className="absolute -top-10 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center">
                <Icon className="text-white text-4xl" />
              </div>
              <h1 className="text-xl font-bold text-center p-2 mt-10">
                {title}
              </h1>
              <p className="text-gray-500 text-center">
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
