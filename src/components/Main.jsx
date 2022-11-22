import React from "react";

function Main() {
  return (
    <div>
      {/* <main className="bg-slate-300 flex justify-around p-10">
        <div className="sm:py-16 pl-9 w-screen">
          <h2 className="text-left text-slate-900 text-2xl font-bold">
            The Best Online Store
          </h2>
          <p className="text-left w-2/3 mt-7">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <div className="text-left">
            <button className="mt-7 items-start px-6 rounded-3xl py-3 bg-slate-900 text-white">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden items-center   p-10 sm:block">
          <img
            className=""
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/6a31/1920/510d/0c40/741a/9fb4/88fa/d713/5ff3/62ba/62ba.jpeg"
            alt=""
          />
        </div>
        <div className="block items-center  justify-center p-10 sm:hidden ">
          <img
            className=""
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/6a31/1920/510d/0c40/741a/9fb4/88fa/d713/5ff3/62ba/62ba.jpeg"
            alt=""
          />
        </div>
      </main> */}
      <section class="text-black body-font bg-slate-300">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-left text-slate-900 sm:text-4xl text-3xl mb-4  font-bold">
              The Best Online Store
            </h2>
            <p class="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <button class="bg-slate-900 inline-flex py-3 px-6 rounded-3xl text-white items-center ">
              Contact Us
            </button>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
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
