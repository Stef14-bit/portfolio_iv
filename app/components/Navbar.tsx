import React from "react";
import navLinks from "@/data/navLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-blue-300 w-full  flex items-center">
      <ul className="w-full flex flex-row justify-around items-center h-16 p-5">
        {navLinks.map((e) => (
          <a
            className="hover:text-lg transition hover:text-slate-600  hover:ease-in-out delay-150"
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
