import React from "react";

function Footer() {
  return (
    <nav className=" bg-[#120F25] p-3 text-[#D1D5DB] flex" w-full>
      <ul className="flex w-full">
        <li className=" ml-42 p-1.5">© 2025. All rights reserved.</li>
        <li className=" ml-[600px] p-1.5">
          <a href="">
            <img
              className="p-1.5 pl-2 inline-flex"
              src="/assets/Facebook.png"
            />
          </a>
          </li>
        <li className="ml-4 p-1.5">
          <a href="">
            <img
              className="p-1.5 pl-2 inline-flex"
              src="/assets/Clip path group.png"
            />
          </a>
        </li>
        <li className= "ml-4 p-1.5">
          <a href="">
            <img
              className="p-1.5 pl-2 inline-flex"
              src="/assets/Linkedin.png"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Footer;
