import React from "react";

function Main() {
  return (
    <div className="bg-[#FFF9F9] w-full flex flex-col items-center pt-10">
      <p className=" italic font-semibold text-[#CC4B2C] text-xl w-[80%]">
        Hi, My name is Saif Ahmed. I have been working as a front-end developer
        for the last two years. I have expertise in these given topics.
      </p>
      <div className="  w-[85%] mt-10 flex flex-wrap">
        <img src="/React.jpg" className=" w-56 mr-4 mt-4" alt="picture" />
        <img src="/express.png" className=" w-56 mr-4 mt-4" alt="picture" />
        <img src="/next.png" className=" w-56 mr-4 mt-4" alt="picture" />
        <img
          src="/cover-firebase.png"
          className=" w-56 mr-4 mt-4"
          alt="picture"
        />
        <img src="/sass.jpg" className=" w-56 mr-4 mt-4" alt="picture" />
        <img src="/tailwindcss.jpg" className=" w-56 mr-4 mt-4" alt="picture" />
        <img src="/mongodb.jpg" className=" w-56 mr-4 mt-4" alt="picture" />
      </div>
    </div>
  );
}

export default Main;
