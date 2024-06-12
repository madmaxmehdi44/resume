import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link 
      href={href}
      className="flex flex-col  text-[#ADB7BE] sm:text-xl rounded  hover:text-lime-400"
    >
      <div className="flex flex-row gap-1 justify-center text-lg">

      {icon}
      {title} 
      </div>
    </Link>
  );
};

export default NavLink;
