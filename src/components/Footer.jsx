import React from "react";
import footerBg from "../assets/footer_image.avif";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { BiX } from "react-icons/bi";
import Logo from "./Logo";
const Footer = () => {
  const { user } = useAuth();

  return (
    <div
      className="bg-cover bg-no-repeat space-y-5 bg-center px-30 pt-10 mt-5 md:mt-10 text-white font-bold"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-around">
        <div>
          <h5 className="text-xl">Useful Links</h5>
          <ul className="space-y-1">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/donation-requests">
              <li>Donation Requests</li>
            </Link>

            {user && (
              <Link to="/donation-requests">
                <li>Donate Us</li>
              </Link>
            )}
          </ul>
        </div>
        <div>
          <h5 className="text-xl">Find Us On</h5>
          <ul className="space-y-1">
            <li>
              <FaFacebook size={30}></FaFacebook>
            </li>
            <li>
              <LiaLinkedin size={30}></LiaLinkedin>
            </li>
            <li>
              <BiX size={30}></BiX>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="border-b border-white w-11/12 mx-auto my-2"></div>
      <p className="text-xs text-center">&copy;2025 Red Help</p>
    </div>
  );
};

export default Footer;
