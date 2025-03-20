import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import DropFileInput from "../Components/DropFileInput";

function Landing() {
  const onFileChange = (files) => {
    console.log(files);
  };

  return (
    <div className="bg-[#120F25] w-full h-full text-white">
      <Nav />
      <div className="text-center justify-center items-center">
        <p className="p-44 text-[#A855F7] mb-[-165px]">
          Ace Your CV / Resume with AI!
        </p>
        <h1 className=" text-3xl font-bold">Is your resume good enough? </h1>
        <p className="text-[#D1D5DB] text-sm mt-[11px] mb-[11px]">
          A free and fast AI resume checker doing 16 crucial checks to ensure
          your resume is ready to perform and get you interview callbacks.
        </p>

        <div className="flex flex-col justify-center mt-10 items-center">
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
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
              href="/"
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

export default Landing;
