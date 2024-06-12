import Link from "next/link";
import {Bars2Icon} from "@heroicons/react/24/solid";
const NavLink = ({ href, title, icon }) => {
  return (<button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border   border-slate-200 text-slate-200  hover:border-black"
            >
                 <p className="text-right text-lg w-full text-zinc-900 shadow-sm p-2 hover:text-pink-600 accent-violet-600 ">

   {/* {icon} */}
   {title} 
   </p>
                            <Bars2Icon className="h-5 w-5" />

            </button>
    // <Link 
    //   href={href}
    //   className="flex flex-row  hover:bg-orange-200 w-full sm:text-xl rounded-lg"
    // >
    //   <p className="text-right text-lg w-full text-zinc-900 shadow-sm hover:text-2xl p-2 hover:text-pink-600 accent-violet-600 ">

    //   {/* {icon} */}
    //   {title} 
    //   </p>
    // </Link>
  );
};

export default NavLink;
