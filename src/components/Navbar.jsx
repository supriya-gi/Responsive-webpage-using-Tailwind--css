import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  // function Menu(e) {
  //   // let list = document.querySelector("ul");
  //   e.name === "menu" ? (e.name = "close") : (e.name = "menu");
  // }
  return (
    <div>
      <nav className="w-full px-4 py-4 bg-slate-900 h-16 md:items-center text-white md:flex justify-between ">
        <div className=" flex justify-between items-center ">
          <img
            src="https://randomuser.me/api/portraits/women/90.jpg"
            alt="logo"
            className="h-10 rounded-3xl  "
          />
          <span
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer absolute right-0 top-6 mx-2 md:hidden block text-white "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </span>
        </div>

        <ul
          className={`md:flex md:items-center z[-1] md:z-auto md:static absolute bg-slate-900 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${
            open ? "top-19 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-0`}
        >
          <NavLink to="/">
            <li className="md:my-0 my-7 md:text-lg text-xl mx-2 md:mx-4  cursor-pointer">
              Home
            </li>
          </NavLink>
          <li className="md:my-0 my-7  text-xl md:text-lg md:mx-4   mx-2 cursor-pointer">
            About
          </li>

          <li className="md:my-0 my-7  text-xl md:text-lg md:mx-4   mx-2  cursor-pointer">
            Contact Us
          </li>

          <NavLink to="login">
            <button className="md:my-0 my-7 md:text-lg text-xl bg-slate-400 px-10 py-1 mx-2 md:mx-4 cursor-pointer rounded-2xl">
              Login
            </button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
