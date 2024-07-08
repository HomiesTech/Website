import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="h-[20rem] relative flex items-center justify-center py-5 bg-blue-700 bg-opacity-40">
      <div>
        <div className="text-center">
          <h2 className="text-6xl font-bold text-blue-700 mb-4">Demo Video</h2>
          <button
            className="text-white bg-blue-700 p-4 rounded-full"
            onClick={() => setOpen(true)}
          >
            <FontAwesomeIcon icon={faPlay} size="2x" />
          </button>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="cn9hTyQ7Umc"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default VideoSection;
