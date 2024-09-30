import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-b from-blue-100 to-slate-50 rounded-lg text-base-content p-10">
        <aside>
          <img src={assets.logo} alt="" />
          <p>
            Prescripto Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="font-semibold text-zinc-600">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-zinc-600">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
