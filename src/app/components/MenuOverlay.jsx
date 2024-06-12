import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-2  shadow-md shadow-primary-400 items-center absolute  
    rounded-b-xl left-0 right-0 mx-auto top-20 transition-colors justify-start bg-slate-200  ">
      {links.map((link, index) => (
        <li key={index} className="w-full flex flex-col">
          <NavLink href={link.path} title={link.title} />

        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
