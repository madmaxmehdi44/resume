"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, AcademicCapIcon,PhoneIcon,BookmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
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

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-45 backdrop-blur-sm">
      <div className="flex flex-row  container lg:py-4 flex-wrap items-center justify-evenly mx-auto px-2 py-2">
        <Link
          href={"/"}
          className="text-lg md:text-lg text-white font-semibold bg-black"
        >
          <h2></h2>
            <Image 
              src="/images/fullstack-development.png"
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 p-1 right-4 rounded-full "
              width={50}
              height={50}
            />
        </Link>
        <div className="mobile-menu block md:hidden bg-black">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-3 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} icon={link.icon} />


              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
