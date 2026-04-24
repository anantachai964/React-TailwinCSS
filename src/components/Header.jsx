import React from "react";
import headerImg from "../assets/img/header-img.png"

function Header() {
  return (
    <header className="bg-[#F5F7FA]">
      <div className="containermx-auto h-[600px] max-w-[1320px] p-8 flex justify-between items-center">
        <div>
            <h1 className="text-[44.55px] font-semibold leading-[1.2]">Lessons and insights <br /> <span className="text-[#4CAF4F]">from 8 years</span></h1>
            <p className="text-[11.4px] text-[#717171] mt-[1rem]">Where to grow your business as a photographer: site or social media?</p>
            <button className="text-white bg-[#4CAF4F] w-[82px] h-[32px] rounded-[4px] mt-[1rem] text-[11.14px] font-medium">Register</button>
        </div>
        <div>
            <img src={headerImg} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
