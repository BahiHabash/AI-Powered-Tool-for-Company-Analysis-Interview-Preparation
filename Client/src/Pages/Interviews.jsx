import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Interviews() {
  return (
    <div className="w-full h-full text-white">
      <Nav />
      <div className="text-center justify-center items-center">
        <div className=" flex flex-col text-white justify-center items-center p-12 pb-[93px] w-full h-full">
          <h2 className="text-center font-bold text-3xl mt-20 mb-20">
            Mock Interview
          </h2>
          <form className=" flex flex-wrap text-center p-8 items-center justify-center">
            <div className="flex">
              <label htmlFor="JobTitle" className="mb-3 text-lg text-left">
                Job Title :
              </label>
              <input
                type="text"
                id="JobTitle"
                name="JobTitle"
                className="mb-3 ml-3 mr-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex">
              <label htmlFor="company" className="mb-3 text-lg text-left">
                Company :
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mb-3 ml-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex">
              <label htmlFor="industry" className="mb-3 ml-3 text-lg text-left">
                Industry :
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                className="mb-3 ml-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex mt-3">
              <label htmlFor="description" className="mb-3 text-lg text-left">
                Job Description :
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="mb-3 ml-3 bg-[#1d2631] p-1.5 text-white rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex items-center ml-3 text-white bg-[#35465a] space-x-2 p-2 rounded-lg hover:bg-[#1d2631] cursor-pointer">
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept=".pdf, .docx"
              />
              <label
                htmlFor="fileInput"
                className="flex items-center bg-transparent gap-2  text-md cursor-pointer hover:text-gray-500"
              >
                <span>📁</span> Attach Your CV
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#9333EA] text-center w-[90%] text-white rounded-full pr-6 pl-6 p-1.5 mt-8 ml-12 justify-center items-center"
            >
              Generate Mock Interview
            </button>
          </form>
        </div>
        <div className="mt-32">
          <h1 className="text-white text-2xl m-[11px] font-bold">
            Unlock the Power of AI for Your Career Growth
          </h1>
          <p className="text-[#D1D5DB] text-sm mb-8">
            Take the guesswork out of job applications! Our AI-powered platform
            helps you analyze companies, prepare for interviews, and refine your
            CV to stand out.
          </p>
          <div className="bg-[#9333EA] mb-36 text-white rounded-full p-1.5 pl-2 ml-10 shadow-md flex justify-center text-center items-center inline-flex">
            <a
              className="inline-flex text-center justify-center items-center pl-3"
              href="/signin"
            >
              Start now → and take control of your career journey today!
              <img className="p-1.5 pl-3" src="/assets/Component 1.svg" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Interviews;
