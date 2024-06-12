"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, AcademicCapIcon,PhoneIcon,BookmarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "شروع",
    path: "/",
    icon:<BookmarkIcon className="h-5  w-5  text-green-600" />,
  },
  {
    title: "درباره",
    path: "#about",
    icon:<BookmarkIcon className="h-5  w-5  text-green-600" />,
  },
  {
    title: "پروژه ها",
    path: "#projects",
    icon:<AcademicCapIcon className="h-5 w-5 text-green-600" />,
  },
  {
    title: "تماس",
    path: "#contact",
    icon:<PhoneIcon className="h-5  w-5  text-green-600" />,
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const buttonRef = useRef(null)

  return (
    <nav className="sticky text-red-300 rounded-b-md w-[90%] md:w-fit shadow-sm shadow-green-600  mx-auto  left-0 right-0 border border-[#333FFF] 
    top-0 z-10 bg-[#d02323] bg-opacity-45 backdrop-blur-sm">
      <div className=" flex flex-row  lg:py-2 items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
        <Link
          href={"/"}
          className=" flex flex-row text-sm md:text-lg text-white font-semibold"
        >
          <h2 className="h-2 align-middle ">مهدی</h2>
            <Image 
              src="/images/fullstack-development.png"
              alt="my image"
              className="transform -translate-x-1/4 - p-0.5 rounded-full"
              width={50}
              height={50}
            />
        </Link>

        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border bg-secondary-900 rounded-full border-slate-200 text-slate-200 hover:text-black hover:border-black"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <>

            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border  bg-secondary-500 rounded-full border-slate-200 text-slate-200 hover:text-black hover:border-black"
            >
                            <Bars2Icon className="h-5 w-5" />

            </button>
            </>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-3 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} icon={link.icon}  
              
                 setNavbarOpen={setNavbarOpen}  
                 navbarOpen={navbarOpen} 
                 />


              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <>
         {/* <div className="flex flex-col
         bg-red-500"> */}
          
        <MenuOverlay links={navLinks} /> 
          {/* </div>  */}
        
        </>
: null}
          </nav>
          
  );
};

export default Navbar;
