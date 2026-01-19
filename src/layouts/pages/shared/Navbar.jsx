import React from "react";
import Logo from "../../../components/Logo";
import { Link, NavLink } from "react-router";
import { GiPayMoney } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";
import { BiUserCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  // getting user data from firebase
  const { user, logoutUser } = useAuth();

  const links = (
    <>
      <NavLink
        to="/"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1  border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        Home
      </NavLink>
      <NavLink
        to="/donation-requests"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        Donation Requests
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/dashboard"
            className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md flex gap-1 md:gap-2 justify-center items-center"
          >
            Dashboard
            <MdDashboard className="lg:h-5 lg:w-5 lg:hidden"></MdDashboard>
          </NavLink>
          {/* <NavLink
            to="/donate"
            className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md flex gap-2 justify-center items-center"
          >
            Donate Us <GiPayMoney className="lg:h-8 lg:w-8" />
          </NavLink> */}
        </>
      )}
      <NavLink
        to="/about"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        About
      </NavLink>
      <NavLink
        to="/help"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        Help
      </NavLink>
      <NavLink
        to="/contact"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        Contact
      </NavLink>
      <NavLink
        to="/faq"
        className="text-white cursor-pointer hover:opacity-50 lg:py-1 border font-bold md:text-lg border-white lg:border-none rounded-md text-center"
      >
        FAQs
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky px-1 md:px-2 z-10 md:py-1 top-0 bg-linear-to-br from-red-600 to-red-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white m-0 p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-12 h-8 md:h-12 md:mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content space-y-1 bg-linear-to-br from-red-600 to-red-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-white">
              {user.photoURL ? (
                <img
                  className="cursor-pointer hover:opacity-50 w-8 md:w-12 h-8 md:h-12 rounded-full"
                  src={user.photoURL}
                  alt="user image"
                />
              ) : (
                <BiUserCircle className="w-8 md:w-12 h-8 md:h-12 cursor-pointer hover:opacity-50"></BiUserCircle>
              )}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu space-y-1 bg-linear-to-br from-red-600 to-red-300 rounded-box z-1 w-30 md:w-52 lg:w-60 p-2 shadow-sm"
            >
              <Link
                to="/dashboard"
                className="text-white flex gap-1 md:gap-2 justify-center items-center cursor-pointer hover:opacity-50 lg:py-1 lg:mx-auto lg:w-48 border font-bold md:text-lg border-white rounded-md text-center"
              >
                Dashboard
                <MdDashboard className="lg:h-5 lg:w-5"></MdDashboard>
              </Link>
              <Link
                onClick={logoutUser}
                className="text-white cursor-pointer hover:opacity-50 lg:mx-auto lg:py-1 lg:w-48 border font-bold md:text-lg border-white rounded-md text-center"
              >
                Logout
              </Link>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="text-white cursor-pointer hover:opacity-50 py-1 w-30 md:w-40 lg:w-48 bg-transparent border font-bold text-base md:text-lg border-white rounded-md text-center"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
