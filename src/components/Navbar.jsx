import React from "react";
import {logo} from "../assets";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between z-50 top-0 sticky bg-black ">
      <div className="p-2 relative">
        <img src={logo} alt="Logo" className="max-w-[4rem] md:max-w-[5rem] lg:max-w-[6rem]" />
      <div className="absolute top-[50%] blue__gradient aspect-square w-[100%] -z-5 "/>
      </div>
      {/* navContents */}
      <div className="space-x-6 hidden md:flex right-0">
        <a href="#HOME"><p><span className="text-blue">#</span>Home</p></a>
        <a href="#SKILLS"><p><span className="text-blue">#</span>Skills</p></a>
        <a href="#WORK"><p><span className="text-blue">#</span>Work</p></a>
        <a href="#PROJECTS"><p><span className="text-blue">#</span>Projects</p></a>
        <a href="#MORE"><p><span className="text-blue">#</span>More</p></a>
      </div>
    </nav>
  );
};

export default Navbar;
