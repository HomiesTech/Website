import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const VideoSection = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <section className="w-auto relative flex flex-col items-center justify-center py-2">
      <div className="z-10 text-center mb-4">
        <h1 className="text-xl text-black text-center font-bold uppercase">
          Demo Video
        </h1>
        <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
      </div>
      <div
        className={`h-[25rem] w-full flex items-center justify-center ${
          isVideoVisible ? "bg-transparent" : "bg-blue-700 bg-opacity-35"
        }`}
      >
        {isVideoVisible ? (
          <iframe
            className="h-[25rem] w-[45rem]"
            src="https://www.youtube.com/embed/cn9hTyQ7Umc?autoplay=1&mute=1&loop=1&playlist=cn9hTyQ7Umc&rel=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-blue-800 mb-4 uppercase">
              watch demo video
            </p>
            <button
              className="bg-blue-700 text-white py-3 px-3 rounded flex items-center justify-center"
              onClick={() => setIsVideoVisible(true)}
            >
              <PlayCircleIcon style={{ fontSize: 50 }} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
