import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="w-full px-4 py-4 bg-slate-900 h-16 md:items-center text-white md:flex justify-between ">
        <img
          src="https://randomuser.me/api/portraits/women/90.jpg"
          alt="logo"
          className="h-10 rounded-3xl  "
        />

        <ul className="md:flex md:items-center z[-1] md:z-auto md:static absolute">
          <NavLink to="/">
            <li className="mx-2 cursor-pointer">Home</li>
          </NavLink>
          <li className="mx-2 cursor-pointer">About</li>
          <NavLink to="login">
            <li className="mx-2  cursor-pointer">Login</li>
          </NavLink>
          <button className="px-6 py-2 mx-4 rounded"> Btn </button>
          {/* <li className="mx-2  cursor-pointer text-lg  bg-orange-400  sm:px-6 rounded-2xl">
            Login
          </li> */}
        </ul>

        {/* <button className="block humberger sm:hidden focus:outline-none">
          <span className="humberger-top"></span>
          <span className="humberger-middle"></span>
          <span className="humberger-bottom"></span>
        </button> */}

        {/* <div className="md:hidden">
          <div className="absolute flex flex-col items-center self-end  text-left py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <a href="#" className="text-black">
              Home
            </a>
            <a href="#" className="text-black">
              About
            </a>
            <a href="#" className="text-black">
              Contact
            </a>
            <a href="#" className="text-black">
              Login
            </a>
          </div>
        </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
