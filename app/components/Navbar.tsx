import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-violet-600 w-full  flex items-center p-5">
      <ul className="w-full flex flex-row justify-around items-center">
        <li>title</li>
        <li>resume</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
