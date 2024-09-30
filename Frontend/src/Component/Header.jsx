import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="bg-primary  rounded-lg flex flex-col md:flex-row">
      <div className="text-white md:px-9 px-5 md:pt-28 pt-10 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl  font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-2  py-5">
          <img className="w-20" src={assets.group_profiles} alt="" />
          <p className="text-[12px] md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            saepe repellendus assumenda qui fugiat?
          </p>
        </div>
        <a
          href="#"
          className="flex items-center bg-white rounded-full px-4 py-3 text-sm font-semibold text-black w-fit gap-2 hover:scale-105 transition-all duration-200"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
