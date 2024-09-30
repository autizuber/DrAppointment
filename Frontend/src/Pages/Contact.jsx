import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl">
        CONTACT <span className="text-black font-bold">US</span>
      </h1>
      <div className="md:px-10 md:flex gap-7 md:ml-28 py-10">
        <div className="py-5 md:w-[40%]">
          <img className="md:w-full" src={assets.contact_image} alt="" />
        </div>
        <div className="md:w-[60%] py-5 md:pt-14">
          <h1 className="text-lg font-semibold pb-3">OUR OFFICE</h1>
          <p className="text-sm text-gray-800 py-3">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-sm text-gray-800 py-3">
            Tel: (415) 555‑0132 <br /> Email: zuberautidev@gmail.com
          </p>
          <h1 className="text-lg font-semibold pb-2">Careers at PRESCRIPTO</h1>
          <p className="text-sm text-gray-800 py-3">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-zinc-500 rounded px-4 py-2">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
