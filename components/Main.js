import React from "react";
import LinkedIn from "./svgs/LinkedIn";
import Github from "./svgs/Github";
import Gmail from "./svgs/Gmail";
import Facebook from "./svgs/Facebook";
import Link from "next/link";

function Main() {
  return (
    <div className="bg-[#FFF9F9] w-full flex flex-col items-center pt-24">
      <div className=" relative overflow-hidden w-[205px] h-[218px] rounded-full bg-[#474E5E]">
        <img
          src="/profile.jpg"
          className="w-[206px] absolute -top-[82px] left-[0]"
        />
      </div>
      <h2 className="text-[#CC4B2C] font-medium text-[30px] mt-5">
        Saif Ahmed
      </h2>
      <h2 className="text-[#CC4B2C] font-medium text-xl mt-1">
        Fullstake Developer
      </h2>
      <div className=" mt-10 flex items-center space-x-6 ">
        <LinkedIn />
        <Github />
        <Gmail />
        <Facebook />
      </div>
      <Link href="https://drive.google.com/file/d/1OG3zbOPSYcpFeIaiH1IFTv7NJTPsJGJF/view?usp=sharing">
        <button className="text-white bg-[#CC4B2C] font-medium px-7 py-4 rounded-md mt-10 hover:bg-[#DF502E]">
          Download Resume
        </button>
      </Link>
    </div>
  );
}

export default Main;
