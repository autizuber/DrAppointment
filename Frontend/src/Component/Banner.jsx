import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const naviget = useNavigate();
  return (
    <div className="bg-primary flex flex-col md:h-72 rounded-lg md:flex-row justify-between px-14 mb-32 ">
      <div className="text-white">
        <h1 className="text-3xl md:text-4xl font-bold pt-3 md:pt-14">
          Book Appointment <br />
          With 100+ Trusted Doctors
        </h1>
        <button
          onClick={() => {
            naviget("/login");
            scrollTo(0, 0);
          }}
          className="bg-white rounded-full px-4 py-3 text-sm font-normal text-black w-fit gap-2 hover:scale-105 transition-all duration-200 mt-7"
        >
          Create account
        </button>
      </div>
      <div>
        <img
          className="h-80 md:-mt-8 mt-5 md:pr-28"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
