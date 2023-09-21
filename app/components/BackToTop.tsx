import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpToLine } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type Props = {};

function BackToTop({}: Props) {
  return (
    <div className="h-5 w-5 rounded-full bg-red-700 absolute bottom-5 right-2">
      <FontAwesomeIcon icon={faArrowsUpToLine} />
    </div>
  );
}

export default BackToTop;
