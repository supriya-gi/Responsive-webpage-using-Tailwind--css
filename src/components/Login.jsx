import React from "react";

function Login() {
  return (
    <div class="flex flex-col items-center justify-center  py-16 bg-gray-100 ">
      <main class="flex flex-col items-center justify-center sm:w-56  w-full flex-1 text-center">
        <div class="bg-white rounded-tr-2xl rounded-tl-2xl sm:rounded-bl-2xl sm:rounded-br-2xl  font-thin shadow-2xl  mx-4 sm:mx-0 m-4 flex max-w-4xl">
          <div class="p-5 py-8 w-64 sm:w-96 sm:py-24 sm:px-20 ">
            <h2 class="text-xl font-bold text-indigo-900 mb-2 item-center ">
              Sign in to Account
            </h2>
            <div class="border-2 w-10 border-indigo-900 inline-block mb-2"></div>

            <p class="text-gray-400 my-3">Use your email accout </p>
            <div class="flex flex-col items-center mb-7   ">
              <div class="bg-gray-300 w-56 p-2 flex items-center ">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="bg-gray-300 outline-none text-sm flex-1 py-1 pl-1"
                />
              </div>
            </div>
            <div class="flex flex-col items-center mb-7">
              <div class="bg-gray-300 w-56 p-2 flex items-center">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  class="bg-gray-300 outline-none text-sm flex-1 py-1 pl-1"
                />
              </div>
            </div>
            <button class="border-2 border-indigo-900 text-indigo-900 rounded-full px-12  py-2 inline-block font-semibold hover:bg-indigo-900 hover:text-white">
              Log In
            </button>
          </div>
          <div class="hidden sm:block sm: w-96 bg-indigo-900 text-white rounded-tr-2xl rounded-br-2xl py-24 px-20">
            <h2 class="text-3xl font-bold mb-2">Log Out</h2>
            <div class="border-2 w-10 border-white inline-block mb-2"></div>
            <p class="my-10 text-lg ">fill the personal information and join</p>
            {/* <button class="border-2 border-white rounded-full  px-12 py-2 inline-block  font-semibold hover:bg-white hover:text-indigo-900">
              Log Out
            </button> */}
            <button class="border-2 border-white-900 text-white-900 rounded-full px-12  py-2 inline-block font-semibold hover:bg-white hover:text-indigo-900">
              Log Out
            </button>
          </div>
        </div>
        <div class="block sm:hidden -mt-4 shadow-2xl   w-64 bg-white   text-indigo-900 text- rounded-bl-2xl rounded-br-2xl py-10 px-7">
          {/* <h2 class="text-2xl font-bold mb-2">Log Out</h2> */}
          {/* <div class="border-2 w-10 border-white inline-block mb-2"></div> */}
          {/* <div className="p-5"> */}
          <p class="mb-5">fill the personal information and join</p>
          <button class="border-2 border-indigo-900 text-indigo-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-indigo-500">
            Log Out
          </button>
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}

export default Login;
