import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav/Nav";

const Header = () => {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <header className="bg-slate-100 shadow sticky top-0 z-40">
      <div className="container mx-auto px-3 py-3 flex justify-between items-center relative">
        {/* ********** Logo Start ********** */}
        <div className="logo">
          <Link to={"/"} className="text-xl text-slate-700 font-bold">
            Fetch<span className="text-purple-500">API</span>
          </Link>
        </div>
        {/* ********** Logo End ********** */}
        {/* ********** Nav Start ********** */}
        <Nav isMenuOpen={isMenuOpen} />
        {/* ********** Nav End ********** */}
        {/* ********** Menu Button Start ********** */}
        <button onClick={()=> setIsMenuOpen(prev => !prev)} className="w-6 h-5 relative md:hidden">
          <span
            className={`w-full h-0.5 bg-slate-700 rounded transition-all absolute left-0 ${
              isMenuOpen ? "top-1/2 rotate-45" : "top-0 rotate-0"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-slate-700 rounded transition-all absolute left-0 top-1/2 -translate-y-2/4 ${
              isMenuOpen ? "opacity-0" : "opacity-1"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-slate-700 rounded transition-all absolute left-0 ${
              isMenuOpen ? "top-1/2 -rotate-45" : "bottom-0"
            }`}
          ></span>
          {/* <span className=" w-full h-0.5 bg-slate-600 absolute top-1/2 left-0 rotate-45"></span>
          <span className=" w-full h-0.5 bg-slate-600 absolute top-50 left-0 opacity-0"></span>
          <span className=" w-full h-0.5 bg-slate-600 absolute top-1/2 left-0 -rotate-45 origin-center"></span> */}
        </button>
        {/* ********** Menu Button End ********** */}
      </div>
    </header>
  );
};

export default Header;
