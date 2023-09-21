import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-blue-300 w-full  flex items-center p-5">
      <ul className="w-full flex flex-row justify-around items-center">
        <a href="#skills"></a>
        <li>Skills</li>
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
