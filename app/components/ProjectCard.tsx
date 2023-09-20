import React from "react";

type Props = {
  projectUrl: string;
  gitUrl: string;
  projectName: string;
  projectDescription: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center content-around border-2 rounded-md border-slate-400 m-5 p-5 hover:shadow-black hover:shadow-2xl">
      <iframe src={props.projectUrl} title={props.projectName}></iframe>
      <h2>{props.projectName}</h2>
      <p>{props.projectDescription}</p>
      <div className=" my-5 h-10 flex  items-center justify-around rounded-md font-light text-xs md:text-lg">
        <a
          className="bg-green-500 h-full w-full flex items-center justify-center rounded-l-md  hover:shadow-md hover:shadow-black"
          href={props.projectUrl}>
          Visit website
        </a>
        <a
          className="bg-blue-500 h-full w-full flex items-center justify-center rounded-r-md hover:shadow-md hover:shadow-black"
          href={props.gitUrl}>
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
