import React from "react";

type Props = {
  projectUrl: string;
  gitUrl: string;
  projectName: string;
  projectDescription: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div>
      <iframe
        src={props.projectUrl}
        frameBorder="0"
        title={props.projectName}></iframe>
      <h2>{props.projectName}</h2>
      <p>{props.projectDescription}</p>
      <a href={props.projectUrl}>
        <button>Visite website</button>
      </a>
      <a href={props.gitUrl}>
        <button>Visit GitHub</button>
      </a>
    </div>
  );
};

export default ProjectCard;
