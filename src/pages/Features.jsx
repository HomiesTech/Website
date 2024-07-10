import VisibilityIcon from "@mui/icons-material/Visibility";
import LayersIcon from "@mui/icons-material/Layers";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShieldIcon from "@mui/icons-material/Shield";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DoneIcon from "@mui/icons-material/Done";
import Carousel from "./Carousel";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Features() {
  return (
    <section
      className="mt-2 pt-[1.5rem] pb-[1.5rem]"
      style={{ background: "white" }}
    >
      <div className="mx-auto align-middle justify-center pt-2 md:pt-16 px-4 md:px-0 py:0">
        <h1 className="text-xl text-black text-center font-bold uppercase">
          features
        </h1>
        <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <h1 className="text-3xl text-black text-center font-bold uppercase">
          Awesome Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 m-10 p-10">
        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <VisibilityIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">High Resolution</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>

        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <LayersIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">Retina Ready</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>
        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <BorderColorIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">Editable Data</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>
        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <ShieldIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">Fully Secured</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>
        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <CloudIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">Cloud Storage</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>
        <div className="rounded-md bg-blue-50  flex flex-col pl-4 ml-4 transition-transform transform hover:scale-110 duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-400 to-purple-600 rounded-full h-[3rem] w-[3rem] flex items-center justify-center p-4 m-4 text-white">
            <PhoneAndroidIcon />
          </div>
          <h1 className="pl-4 text-xl font-bold">Fully Responsive</h1>
          <p className="m-2 p-2 text-gray-400">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </p>
        </div>
      </div>
      {/*ScreenShot Section*/}
      <div className="flex flex-row">
        <div className="m-10 p-10 w-[2/3]">
          <p className="text-purple-700 font-bold text-xl m-2">ScreenShot</p>
          <h1 className="text-5xl text-black font-bold m-2">
            User Friendly interface And Very Easy To Use Fitness App
          </h1>
          <p className="text-gray-500 m-2 p-4">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo eirmod magna dolore erat amet
          </p>
          <p className="text-gray-500 m-2 p-2">
            <DoneIcon className="text-purple-700" /> Diam dolor diam ipsum et
            tempor sit
          </p>
          <p className="text-gray-500 m-2 p-2">
            <DoneIcon className="text-purple-700" /> Aliqu diam amet diam et eos
            labore
          </p>
          <p className="text-gray-500 m-2 p-2">
            <DoneIcon className="text-purple-700" /> Clita erat ipsum et lorem
            et sit
          </p>
          <div className="pt-12 md:pt-16 p-6">
            <button className=" px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-600 text-white text-center rounded-3xl">
              Read More
            </button>
          </div>
        </div>
        <div className="w-[1/3] m-10 p-10 relative ">
          <Carousel />
        </div>
      </div>
      {/*3 Steps Section*/}
      <div className="flex flex-col items-center justify-center p-10 m-10">
        <div>
          <p className="text-xl text-purple-700 font-bold text-center">
            How It Works
          </p>
          <h1 className="text-5xl font-bold text-center">3 Easy Steps</h1>
        </div>
        <div className="flex flex-row justify-center items-center m-8 p-8 space-x-8">
          <div className="relative bg-blue-50 w-[1/3] p-6 rounded-md flex flex-col items-center">
            <div className="absolute -top-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center">
              <SettingsIcon className="text-white text-4xl" />
            </div>
            <h1 className="text-xl font-bold text-center p-2 mt-10">
              Install The App
            </h1>
            <p className="text-gray-500 text-center">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet
            </p>
          </div>
          <div className="relative bg-blue-50 w-[1/3] p-6 rounded-md flex flex-col items-center">
            <div className="absolute -top-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center">
              <AccountBoxIcon className="text-white text-4xl" />
            </div>
            <h1 className="text-xl font-bold text-center p-2 mt-10">
              SetUp Your Profile
            </h1>
            <p className="text-gray-500 text-center">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet
            </p>
          </div>
          <div className="relative bg-blue-50 w-[1/3] p-6 rounded-md flex flex-col items-center">
            <div className="absolute -top-10 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full w-20 h-20 flex items-center justify-center">
              <DoneIcon className="text-white text-4xl" />
            </div>
            <h1 className="text-xl font-bold text-center p-2 mt-10">
              Enjoy the Features
            </h1>
            <p className="text-gray-500 text-center">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
