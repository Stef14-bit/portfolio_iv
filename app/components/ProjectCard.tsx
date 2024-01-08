import React from "react";

type Props = {
  projectUrl: string;
  gitUrl: string;
  projectName: string;
  projectDescription: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="border-2 flex flex-col justify-center content-between rounded-md  m-10 p-5  max-w-sm">
      <iframe src={props.projectUrl} title={props.projectName}></iframe>
      <h2 className="py-5 font-light text-2xl">{props.projectName}</h2>
      <p className="font-light text-sm">{props.projectDescription}</p>
      <div className=" my-5 h-10 flex  items-center justify-around rounded-md font-light text-xs md:text-lg">
        <a
          className="bg-green-300 h-full w-full flex items-center justify-center rounded-l-md  hover:shadow-md hover:shadow-black"
          href={props.projectUrl}
          target="_blank">
          Visit website
        </a>
        <a
          className="bg-blue-300 h-full w-full flex items-center justify-center rounded-r-md hover:shadow-md hover:shadow-black"
          href={props.gitUrl}
          target="_blank">
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
