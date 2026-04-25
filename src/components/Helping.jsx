import React from "react";
import icon1 from "../assets/img/icon-04.png";
import icon2 from "../assets/img/icon-05.png";
import icon3 from "../assets/img/icon-06.png";
import icon4 from "../assets/img/icon-07.png";

function Helping() {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex justify-between items-center container max-w-[1320px] mx-auto h-[200px] mb-[33px] p-8">
        <div className="flex-1 p-[4rem]">
          <h2 className="text-[#4D4D4D] text-[25px] font-semibold">
            Helping a local
          </h2>
          <span className="text-[#4CAF4F] text-[25px] font-semibold">
            business reinvent itself
          </span>
          <p className="text-[#18191F] text-[12px]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[1.5rem]">
          <div className="flex items-center gap-[1rem]">
            <img className="p-4" src={icon1} alt="" />
            <div className="">
              <h2 className="text-[20px] font-bold text-[#4D4D4D]">
                2,245,341
              </h2>
              <p className="text-[12px] text-[#717171]">Members</p>
            </div>
          </div>
          <div className="flex items-center gap-[1rem]">
            <img className="p-4" src={icon2} alt="" />
            <div>
              <h2 className="text-[20px] font-bold text-[#4D4D4D]">46,328</h2>
              <p className="text-[12px] text-[#717171]">Clubs</p>
            </div>
          </div>
          <div className="flex items-center gap-[1rem]">
            <img className="p-4" src={icon3} alt="" />
            <div>
              <h2 className="text-[20px] font-bold text-[#4D4D4D]">828,867</h2>
              <p className="text-[12px] text-[#717171]">Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center gap-[1rem]">
            <img className="p-4" src={icon4} alt="" />
            <div>
              <h2 className="text-[20px] font-bold text-[#4D4D4D]">
                1,926,436
              </h2>
              <p className="text-[12px] text-[#717171]">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helping;
