import React from "react";
import iconCilentsImg1 from "../assets/img/clients/client-01.png";
import iconCilentsImg2 from "../assets/img/clients/client-02.png";
import iconCilentsImg3 from "../assets/img/clients/client-03.png";
import iconCilentsImg4 from "../assets/img/clients/client-04.png";
import iconCilentsImg5 from "../assets/img/clients/client-05.png";
import iconCilentsImg6 from "../assets/img/clients/client-06.png";
import iconCilentsImg7 from "../assets/img/clients/client-07.png";

const icons = [
  iconCilentsImg1,
  iconCilentsImg2,
  iconCilentsImg3,
  iconCilentsImg4,
  iconCilentsImg5,
  iconCilentsImg6,
  iconCilentsImg7,
];

function Clients() {
  return (
    <div className="max-w-[1320px] mx-auto h-[135px] mt-[1.5rem] ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-[#4D4D4D] text-[25px] font-semibold">
          Our Clients
        </h2>
        <p className="text-[11.14px] ">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex justify-center items-center gap-[5.5rem] mt-[2rem]">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Clients;
