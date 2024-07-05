import React from "react";
import profile from "../assets/img.svg";

const Team = () => {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
        <h1 className="text-3xl text-black text-center font-bold uppercase">
          Team
        </h1>
        <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <div className="text-center mx-auto max-w-2xl text-gray-500">
          <p>
            Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
            viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra
            ante.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto pt-12 md:pt-16 px-4 md:px-0 ">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-white h-[10rem] w-[10rem]">
            <img src={profile} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Name
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">Position</p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-white h-[10rem] w-[10rem]">
            <img src={profile} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            name
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">Position</p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-white h-[10rem] w-[10rem]">
            <img src={profile} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Name
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">Position</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
