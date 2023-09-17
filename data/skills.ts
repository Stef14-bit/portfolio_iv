import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faJs,
  faReact,
  faNode,
  faHtml5,
  faCss3,
  faBootstrap,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase as faDatabaseSolid,
  faCode as faCodeSolid,
  faServer as faServerSolid,
  faProjectDiagram as faProjectDiagramSolid,
} from "@fortawesome/free-solid-svg-icons";

type Skill = {
  id: number;
  skillName: string;
  skillIcon: IconDefinition;
};

const mySkills: Skill[] = [
  { id: 1, skillName: "JavaScript", skillIcon: faJs },
  { id: 2, skillName: "TypeScript", skillIcon: faCodeSolid },
  { id: 3, skillName: "React.js", skillIcon: faReact },
  { id: 4, skillName: "Node.js", skillIcon: faNode },
  { id: 5, skillName: "Express.js", skillIcon: faServerSolid },
  { id: 6, skillName: "MySQL", skillIcon: faDatabaseSolid },
  { id: 7, skillName: "Agile", skillIcon: faProjectDiagramSolid },
  { id: 8, skillName: "SCRUM", skillIcon: faProjectDiagramSolid },
  { id: 9, skillName: "HTML5", skillIcon: faHtml5 },
  { id: 10, skillName: "CSS", skillIcon: faCss3 },
  { id: 11, skillName: "Tailwind CSS", skillIcon: faCodeSolid },
  { id: 12, skillName: "Bootstrap CSS", skillIcon: faBootstrap },
  { id: 13, skillName: "Git", skillIcon: faGit },
  { id: 14, skillName: "GitHub", skillIcon: faGithub },
];

export default mySkills;
