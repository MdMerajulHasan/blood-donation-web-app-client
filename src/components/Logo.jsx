import React from "react";
import { Link } from "react-router";
import logo from "../../src/assets/blood_donation_icon.jpg"

const Logo = () => {
  return (
    <Link title="Red Help" className="text-white font-bold" to="/">
      <img
        className="bg-white rounded-full p-0.5 w-8 md:w-12 h-8 md:h-12"
        src={logo}
        alt="logo image"
      />
      <h4 className="hidden lg:flex">Red Help</h4>
    </Link>
  );
};

export default Logo;
