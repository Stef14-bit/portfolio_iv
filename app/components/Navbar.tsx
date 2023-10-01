import React from "react";
import navLinks from "@/data/navLinks";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-blue-300 w-full  flex items-center p-5">
      <ul className="w-full flex flex-row justify-around items-center">
        {navLinks.map((e) => (
          <a key={e.id} href={e.href}>
            <li>{e.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
