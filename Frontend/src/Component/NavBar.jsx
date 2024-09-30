import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const naviget = useNavigate();
  const [menu, setMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between py-5 text-sm mb-5 border-b-2 border-b-gray-300">
      <img
        onClick={() => naviget("/")}
        className="w-36 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className=" hidden md:flex items-start gap-5">
        <NavLink to="/">
          <li className="py-1 font-semibold">Home</li>
          <hr className=" hidden outline-none border-none h-0.5 bg-primary m-auto w-3/4" />
        </NavLink>
        <NavLink to="/Doctor">
          <li className="py-1 font-semibold">All Doctors</li>
          <hr className=" hidden outline-none border-none h-0.5 bg-primary m-auto w-3/4" />
        </NavLink>
        <NavLink to="/About">
          <li className="py-1 font-semibold">About</li>
          <hr className=" hidden outline-none border-none h-0.5 bg-primary m-auto w-3/4" />
        </NavLink>
        <NavLink to="/Contact">
          <li className="py-1 font-semibold">Contact</li>
          <hr className=" hidden outline-none border-none h-0.5 bg-primary m-auto w-3/4" />
        </NavLink>
      </ul>
      <div className="flex gap-3">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-slate-50 rounded flex flex-col gap-2 p-4">
                <p
                  onClick={() => naviget("MyProfile")}
                  className=" hover:text-black"
                >
                  My Profile
                </p>
                <hr />
                <p
                  onClick={() => naviget("MyAppointment")}
                  className=" hover:text-black"
                >
                  My Appointment
                </p>
                <hr />
                <p
                  onClick={() => setToken(false)}
                  className=" hover:text-black"
                >
                  Logout
                </p>
                <hr />
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => naviget("/login")}
            className="font-semibold text-white bg-primary px-9 py-3 rounded-full active:ring-1"
          >
            Connect
          </button>
        )}
        <img
          onClick={() => setMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        <div
          className={`${
            menu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 transition-all overflow-hidden bg-white z-20`}
        >
          <div className="flex items-center justify-between px-5 py-3">
            <img
              onClick={() => {
                naviget("/");
                setMenu(false);
              }}
              className="w-36"
              src={assets.logo}
              alt=""
            />
            <img
              className="w-7"
              onClick={() => setMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-6 px-5 py-4 font-medium mt-6 text-2xl text-zinc-500">
            <NavLink to="/" onClick={() => setMenu(false)}>
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink to="/Doctor" onClick={() => setMenu(false)}>
              <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
            </NavLink>
            <NavLink to="/About" onClick={() => setMenu(false)}>
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink to="/Contact" onClick={() => setMenu(false)}>
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
