import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center bg-violet-800 text-white py-4 px-10 shadow-md ">
      <div className="logo">
        <span className="font-extrabold text-2xl tracking-wide cursor-pointer">
          iTask
        </span>
      </div>

      <ul className="flex gap-10 text-lg font-medium">
        <li className="relative group cursor-pointer">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
        </li>
        <li className="relative group cursor-pointer">
          Your Tasks
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
