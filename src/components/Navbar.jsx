import React from "react";
import logo from "../assets/img/logo-black.png";

function Navbar() {
  return (
    <nav className="bg-[#F5F7FA]">
      <div className="container max-w-[1320px] mx-auto h-[80px] flex justify-between items-center p-8">
        {/* LOGO */}
        <div>
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        {/* MENU */}

        <ul className="flex gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        {/* SING IN / SIGN UP */}
        <ul className="flex gap-8 inline-flex">
          <li className="">
            <a
              className="w-24 h-10 text-[#4CAF4F] inline-flex items-center justify-center rounded-[5px]"
              href="#"
            >
              Login
            </a>
          </li>
          <li>
            <a
              className="bg-[#4CAF4F] w-24 h-10 text-white inline-flex items-center justify-center rounded-[5px]"
              href="#"
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
