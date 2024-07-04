import VisibilityIcon from "@mui/icons-material/Visibility";
import LayersIcon from "@mui/icons-material/Layers";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ShieldIcon from "@mui/icons-material/Shield";
import CloudIcon from "@mui/icons-material/Cloud";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function Features() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
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
    </section>
  );
}
