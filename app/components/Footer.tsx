import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-gradient-to-bl from-blue-300 via-blue-500 to-blue-300 text-center p-5">
      <p className="p-1 font-light">Stefan Ivanus</p>
      <p className="p-1 font-light">Zürich 2023</p>
      <a href="mailto:stefan.ivanus@outlook.de">Contact Me</a>
    </div>
  );
};

export default Footer;
