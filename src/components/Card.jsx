import React from "react";
import icon1 from "../assets/img/icon-01.png";
import icon2 from "../assets/img/icon-02.png";
import icon3 from "../assets/img/icon-03.png";

function Card() {
  return (
    <div className="container max-w-[1320px] mx-auto h-[400px] mt-[27px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[25px] font-semibold text-[#4D4D4D]">
          Manage your entire community <br />
        </h2>
        <span className="text-[25px] font-semibold text-[#4D4D4D]">
          in a single system
        </span>
        <p className="text-[11.14px] text-[#717171] mt-[0.5rem]">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center mt-[2rem] gap-[1.5rem]">
        <div className="w-[240px] h-auto shadow-sm grid grid-cols-1 justify-items-center p-[1.5rem] gap-[0.5rem]">
          <img src={icon1} alt="" />
          <h2 className="text-center text-[#4D4D4D] text-[20px] font-bold">
            Membership <br />
            Organisations
          </h2>
          <p className="text-[#717171] text-[10px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-[240px] h-auto shadow-sm grid grid-cols-1 justify-items-center p-[1.5rem] gap-[0.5rem]">
          <img src={icon2} alt="" />
          <h2 className="text-center text-[#4D4D4D] text-[20px] font-bold">
            National
            <br />
            Associations
          </h2>
          <p className="text-[#717171] text-[10px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-[240px] h-auto shadow-sm grid grid-cols-1 justify-items-center p-[1.5rem] gap-[0.5rem]">
          <img src={icon3} alt="" />
          <h2 className="text-center text-[#4D4D4D] text-[20px] font-bold">
            Clubs And
            <br />
            Groups
          </h2>
          <p className="text-[#717171] text-[10px] text-center">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
