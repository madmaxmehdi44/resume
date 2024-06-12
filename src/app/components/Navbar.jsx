"use client";

// import Link from "next/link";
import React from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, AcademicCapIcon,PhoneIcon,BookmarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";
import DropDiMenu from "./DropDiMenu";
// const navLinks = [
//   {
//     title: "شروع",
//     path: "/",
//     icon:<BookmarkIcon className="h-5  w-5  text-green-600" />,
//   },
//   {
//     title: "درباره",
//     path: "#about",
//     icon:<BookmarkIcon className="h-5  w-5  text-green-600" />,
//   },
//   {
//     title: "پروژه ها",
//     path: "#projects",
//     icon:<AcademicCapIcon className="h-5 w-5 text-green-600" />,
//   },
//   {
//     title: "تماس",
//     path: "#contact",
//     icon:<PhoneIcon className="h-5  w-5  text-green-600" />,
//   },
// ];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10  backdrop-blur-md">
     <DropDiMenu />

</div>
  );
};

export default Navbar;
