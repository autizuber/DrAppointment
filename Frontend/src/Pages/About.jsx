import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-gray-800 text-2xl pb-4">
        ABOUT <span className="font-bold">US</span>
      </h1>
      <div className="md:flex gap-5">
        <div className="md:w-[30%] md:pr-8">
          <img className=" md:w-full" src={assets.about_image} alt="" />
        </div>
        <div className="md:w-[70%] md:flex flex-col gap-5 text-sm pt-5">
          <p className="">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className=" hidden md:block">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h1 className="text-black font-bold py-5 md:py-2">Our Vision</h1>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="py-10 md:mt-6">
        <h1 className="text-center md:text-start text-gray-800 text-2xl pb-4">
          Why <span className="font-bold text-black">Choose Us</span>
        </h1>
        <div className="flex flex-col md:grid grid-cols-3 py-5 md:py-4">
          <div className="border border-zinc-600 p-2 md:p-10">
            <p className="text-center md:text-start font-semibold pl-3 pb-2">
              Efficiency:
            </p>
            <p className="text-center md:text-start">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border border-zinc-600 p-2 md:p-10">
            <p className="text-center md:text-start font-semibold pl-3 pb-2">
              Convenience:
            </p>
            <p className="text-center md:text-start">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="border border-zinc-600 p-2 md:p-10">
            <p className="text-center md:text-start font-semibold pl-3 pb-2">
              Personalization:
            </p>
            <p className="text-center md:text-start">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
