import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-blue-300 text-center p-5">
      <p className="p-1 font-light">Stefan Ivanus</p>
      <p className="p-1 font-light">Zürich 2023</p>
      <a className="p-1 font-light" href="#">
        Contact
      </a>
    </div>
  );
};

export default Footer;
