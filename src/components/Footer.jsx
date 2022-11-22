import React from "react";

function Footer() {
  return (
    <div className="bg-slate-900  ">
      <div className="grid sm:grid-cols-4 sm:py-10 sm:px-16 gap-4 ">
        <div className="text-white text-left  p-5">
          <h2>About</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="text-white text-left p-5">
          <h2>Usefull Links</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="text-white text-left p-5">
          <h2>Products</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="text-white text-left p-5">
          <h2>Reach Us</h2>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
