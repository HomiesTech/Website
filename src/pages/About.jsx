import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SupportIcon from "@mui/icons-material/Support";
import BoltIcon from "@mui/icons-material/Bolt";

const About = () => {
  return (
    <section>
      <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
        <h1 className="text-3xl text-black text-center font-bold uppercase">
          ABOUT
        </h1>
        <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <div className="text-center mx-auto max-w-2xl text-gray-500">
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className="flex w-full md:w-[50rem] mx-auto align-middle pt-12 md:pt-16 px-4 md:px-0 justify-between">
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
          <SupportIcon style={{ fontSize: 60 }} />
        </div>
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
          <PhoneAndroidIcon style={{ fontSize: 60 }} />
        </div>
        <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
          <BoltIcon style={{ fontSize: 60 }} />
        </div>
      </div>
    </section>
  );
};

export default About;
