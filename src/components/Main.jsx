import React from "react";

function Main() {
  return (
    <div>
      <section className="text-black body-font bg-slate-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-left text-slate-900 sm:text-4xl text-2xl mb-4  font-bold">
              The Best Online Store
            </h2>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <button className="bg-slate-900 inline-flex py-3 px-6 rounded-3xl text-white items-center ">
              Contact Us
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/6a31/1920/510d/0c40/741a/9fb4/88fa/d713/5ff3/62ba/62ba.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
