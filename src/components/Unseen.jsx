import React from "react";
import howImg from "../assets/img/img-01.png";

function Unseen() {
  return (
    <div className="containermax-w-[1320px] mx-auto h-auto mb-[33px]">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <img src={howImg} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-[25px] text-[#4D4D4D] font-semibold mb-[1rem]">
            The unseen of spending three <br />
            years at Pixelgrade
          </h2>
          <p className="text-[10px] text-[#717171] inline-block mb-[1.5rem] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
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

export default Unseen;
