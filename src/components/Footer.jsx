import React from "react";
import footerBg from "../assets/footer_image.avif";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
const Footer = () => {
  const { user } = useAuth();

  return (
    <div
      className="bg-cover w-full bg-no-repeat space-y-5 bg-center px-30 pt-10 mt-5 md:mt-10 text-white font-bold"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="flex gap-5 flex-col-reverse md:flex-row md:justify-around">
        <div>
          <h5 className="text-sm md:text-xl">Useful Links</h5>
          <ul className="space-y-1 flex flex-col text-xs md:text-sm">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/donation-requests">
              <li>Donation Requests</li>
            </Link>

            {user && (
              <Link to="/dashboard">Dashboard</Link>
              // <Link to="/donation-requests">
              //   <li>Donate Us</li>
              // </Link>
            )}
            <Link to="/about">About</Link>
            <Link to="/faq">FAQs</Link>
          </ul>
        </div>
        <div>
          <h5 className="text-sm md:text-xl">Contact</h5>
          <ul className="space-y-1 flex flex-col text-xs md:text-sm">
            <li>
              <Link to="mailto:merajuljim1971@gmail.com">
                Email:merajuljim1971@gmail.com
              </Link>
            </li>
            <li>Phone: +8801796596995</li>
            <li>Location: Gabtoli, Dhaka, Bangladesh.</li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm md:text-xl">Find Us On</h5>
          <div className="flex text-xs md:text-sm flex-col gap-1 md:gap-2 md:items-center">
            <Link target="_blank" to="https://www.facebook.com/jim.merajul.1/">
              <FaFacebook size={20}></FaFacebook>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/md-merajul-hasan-developer/"
            >
              <FaLinkedin size={20}></FaLinkedin>
            </Link>
            <Link to="https://github.com/MdMerajulHasan">
              <FaGithub target="_blank" size={20}></FaGithub>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-white w-full md:w-11/12 mx-auto my-2"></div>
      <p className="text-xs text-center">&copy;2025 Red Help</p>
    </div>
  );
};

export default Footer;
