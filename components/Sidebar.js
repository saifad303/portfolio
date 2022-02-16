import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="bg-[#CC4B2C] h-full w-1/3">
      <div className="h-full flex flex-col justify-center  space-y-14">
        <button
          href="#"
          className=" text-white text-left ml-24 text-2xl font-medium ease-out duration-300 hover:translate-x-6"
        >
          About Me
        </button>
        <button
          href="#"
          className=" text-white text-left ml-24 text-2xl font-medium ease-out duration-300 hover:translate-x-6"
        >
          Skills
        </button>
        <button
          href="#"
          className=" text-white text-left ml-24 text-2xl font-medium ease-out duration-300 hover:translate-x-6"
        >
          Demo Projects
        </button>
        <button
          href="#"
          className=" text-white text-left ml-24 text-2xl font-medium ease-out duration-300 hover:translate-x-6"
        >
          Experience
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
