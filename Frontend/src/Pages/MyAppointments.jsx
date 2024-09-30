import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="py-10">
      <h1 className="font-medium text-zinc-600">My appointments</h1>
      <hr className="my-2 border-none h-[1px] bg-zinc-300" />
      {doctors.slice(0, 2).map((item, index) => (
        <div key={index}>
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-[20%]">
              {" "}
              <img className=" md:w-28 bg-blue-200" src={item.image} alt="" />
            </div>
            <div className="md:w-[60%]">
              <h1 className="text-sm font-semibold text-zinc-600 py-1">
                {item.name}
              </h1>
              <p className="text-xs font-medium pb-2">{item.speciality}</p>
              <p className="text-sm text-zinc-500">Address:</p>
              <p className="text-xs text-zinc-500">57th Cross, Richmond </p>
              <p className="text-xs text-zinc-500">
                Circle, Church Road, London
              </p>
              <p className="text-sm py-2 font-medium text-zinc-600">
                Date & Time: 25, July, 2024 | 8:30 PM
              </p>
            </div>
            <div className="md:w-[18%] md:flex md:flex-col gap-3 md:mt-16 flex justify-between flex-row py-2">
              <button className="px-4 py-1 border border-zinc-500 rounded text-lg hover:bg-primary hover:text-white">
                Pay hear
              </button>
              <button className="px-4 py-1 border border-zinc-500 rounded text-lg hover:bg-red-600 hover:text-white">
                Cancel appointment
              </button>
            </div>
          </div>
          <hr className="my-2 border-none h-[1px] bg-zinc-400" />
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
