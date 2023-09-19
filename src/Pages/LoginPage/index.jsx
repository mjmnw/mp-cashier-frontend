import { useRef } from "react";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";

export default function LandingPage() {
    return (
      <div className="flex flex-col bg-yellow-900 w-full h-screen place-items-center pt-10">
        {/* <div className="flex flex-col w-[200px] h-[100px] border"> */}
        <img
          src="/image/Lucy_Sky-removebg-preview.png"
          className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] object-cover"
          alt=""
        />
        {/* </div> */}
        <div className="flex flex-col mt-14 w-[380px] sm:w-[600px] sm:h-[400px] rounded-xl bg-yellow-950 place-items-center">
          <h1 className="text-white pt-8 text-3xl">Login</h1>
          <div className="text-white pt-2 text-s text-center">
            Welcome back! Please input your email and password to access this app!
          </div>
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdOutlineMailOutline className="text-neutral-700" />
              </span>
              <input
                className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[510px] h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-12"
                placeholder="Email"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MdLockOutline className="text-neutral-700" />
              </span>
              <input
                className="placeholder:italic placeholder:text-neutral-700 block w-[350px] sm:w-[510px] h-[40px] rounded-md shadow-sm focus:outline-none focus:border-neutral-950 focus:ring-neutral-950 focus:ring-1 sm:text-sm border-2 pl-9 mt-4"
                placeholder="Password"
                type="text"
                name="search"
              />
            </label>
          </div>
          <button className="border border-black bg-white rounded-xl w-[250px] h-[45px] mt-8 p-2 bg-yellow-500 font-bold">
            Login
          </button>
          <span className="mt-7 text-yellow-500">Forgot your password?</span>
        </div>
      </div>
    );
  }
