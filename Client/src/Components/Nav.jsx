import React from "react";

const Nav = () => {
  return (
    <nav
      className="fixed right-0 left-0 top-0 bg-[#120F25] p-3 text-[#D1D5DB] flex"
      w-full
    >
      <ul className="flex w-full">
        <li className="ml-32 p-1.5">
          <img src="/assets/Vector.png" />
        </li>
        <li className="ml-72 p-1.5">
          <a href="/">Home</a>
        </li>
        <li className="ml-10 p-1.5">
          <a href="/cv">CV Analyzer</a>
        </li>
        <li className="ml-72 p-1.5">
          <a href="/signin">Sign in</a>
        </li>
        <li className="bg-[#6B7280] text-white rounded-full p-1.5 pl-4.5 ml-10 mb-[20px] flex justify-evenly">
          <a href="">Start Now <img className="p-1.5 pl-2 inline-flex" src="/assets/Component 1.svg" />
          </a>
          </li>
      </ul>
    </nav>
  );
};

export default Nav;
