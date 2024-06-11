import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block  text-[#ADB7BE] sm:text-xl rounded  hover:text-lime-400"
    >
      {title}
    </Link>
  );
};

export default NavLink;
