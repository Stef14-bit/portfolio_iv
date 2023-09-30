import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpToLine } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type Props = {};

function BackToTop({}: Props) {
  return (
    <a
      href="#"
      className="h-14 w-14 p-4 rounded-full bg-green-500 opacity-50 hover:opacity-100 fixed bottom-5 right-2">
      <FontAwesomeIcon className="text-white" icon={faArrowsUpToLine} />
    </a>
  );
}

export default BackToTop;
