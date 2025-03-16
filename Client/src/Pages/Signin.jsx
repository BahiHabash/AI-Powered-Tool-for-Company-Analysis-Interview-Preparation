import React from "react";

function Signin() {
  return (
    <div className=" flex flex-col text-white justify-center items-center p-12 pb-[93px] w-full h-full">
      <h2 className="text-center font-bold text-3xl mt-1 mb-24">Sign In</h2>
      <form
        className=" text-center border-2 border-white p-8 rounded-2xl"
        style={{
          boxShadow: `
      0px 0px 40px #7C3AED, 
      0px 0px 60px #9867F0, 
      0px 0px 70px #ED4E50
    `,
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-3 text-lg text-left">
            Email:<span className=" text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-3 text-lg text-left">
            Password:<span className=" text-red-400">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mb-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#9333EA] text-center w-[90%] text-white rounded-full p-3 pr-6 pl-6 mt-2 shadow-md flex justify-center items-center inline-flex"
        >
          Sign In
        </button>
        <p className="no-underline hover:underline hover:text-[#9333EA] mt-10">
          <a href="/signup">Don't have an account? Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Signin;
