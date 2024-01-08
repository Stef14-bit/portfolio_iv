import React from "react";
import navLinks from "@/data/navLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-gradient-to-bl from-blue-50 via-blue-200 to-blue-100 w-full  flex items-center ">
      <ul className="w-full flex sm:flex-row flex-col justify-around items-center h-28 text-center md:h-16 p-5">
        {navLinks.map((e) => (
          <a
            className="hover:text-lg  hover:text-slate-600 ease-in-out duration-300 hover:underline font-light"
            key={e.id}
            href={e.href}>
            <li className="w-28">{e.name}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
