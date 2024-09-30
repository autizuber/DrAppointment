import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const TopDoctors = () => {
  const naviget = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-bold">Top Doctors to Book</h1>
      <p className="text-center font-semibold text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto py-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => naviget(`/Appointment/${item._id}`)}
            key={index}
            className="card bg-base-100 md:w-48 shadow-lg ring-1 ring-blue-100 hover:translate-y-[-10px] transition-all duration-500"
          >
            <figure className="bg-blue-50">
              <img src={item.image} alt={item.name} />
            </figure>
            <div className="card-body md:px-3 ">
              <div className="text-success text-sm font-bold flex items-center justify-center">
                {" "}
                <p className="w-1 h-1 bg-success rounded-full"></p>{" "}
                <p className="w-full ml-2">Available</p>
              </div>
              <h2 className="card-title md:text-sm text-gray-700">
                {item.name}
              </h2>
              <p className="md:text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          naviget("/Doctor");
          scrollTo(0, 0);
        }}
        className="w-40 md:w-32 bg-gradient-to-b from-blue-100 to-blue-50 text-sm rounded-full font-semibold px-8 py-3 ring-2 ring-blue-200"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
