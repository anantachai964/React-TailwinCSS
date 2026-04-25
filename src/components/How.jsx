import React from "react";
import howImg from "../assets/img/img-02.png";

function How() {
  return (
    <div className="containermax-w-[1320px] mx-auto h-auto ">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <img src={howImg} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-[25px] text-[#4D4D4D] font-semibold mb-[1rem]">
            How to design your site footer like <br />
            we did
          </h2>
          <p className="text-[10px] text-[#717171] inline-block mb-[1.5rem] w-[80%]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <br />
          <button className="w-[105px] h-[35px] bg-[#4CAF4F] text-white text-[10px] rounded-[4px] ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default How;
