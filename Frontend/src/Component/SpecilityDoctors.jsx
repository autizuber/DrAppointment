import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecilityDoctors = () => {
  return (
    <div
      id="#spelicity"
      className="flex flex-col items-center gap-4 text-gray-700 py-16 overflow-hidden"
    >
      <h1 className="font-bold text-3xl capitalize">find by Speciality</h1>
      <p className="text-sm font-semibold text-center">
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br className="md:block" hidden /> your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-5 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            className="flex flex-col items-center flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 mb-4"
            key={item.speciality}
            to={`/Doctor/${item.speciality}`}
          >
            <img className="w-14 md:w-16" src={item.image} alt="" />
            <p className="text-sm font-semibold pt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecilityDoctors;
