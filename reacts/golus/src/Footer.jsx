import React from "react";

function Footer() {
  return (
    <footer className="bg-violet-800 text-white py-6 px-10 shadow-inner mt-11">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-semibold cursor-pointer">
          © {new Date().getFullYear()} iTask
        </div>
        <ul className="flex gap-8 text-md font-medium">
          <li className="relative group cursor-pointer">
            Privacy Policy
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            Terms of Service
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
