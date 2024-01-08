/* eslint-disable react/no-unescaped-entities */

import mySkills from "@/data/skills";
import myProjects from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <section id="top" className=" m-10">
        <h2 className="text-center font-light text-2xl my-5">About Me</h2>
        <p className="text-sm text-center font-light  p-7">
          Hello! I'm an ambitious web developer with a genuine passion for
          coding and creating captivating online experiences. I'm determined to
          overcome challenges, stay updated with the latest trends, and become
          an accomplished professional in the field. Excited about the journey
          ahead!
        </p>
      </section>

      <section id="skills" className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1  p-5">
          <h2 className="text-center font-light text-2xl my-5">Skills</h2>
          <ul className="flex flex-wrap justify-center items-center  shadow-black shadow-md">
            {mySkills.map((skill) => (
              <li
                key={skill.id}
                className="text-md font-light m-5 flex flex-col items-center">
                <FontAwesomeIcon
                  icon={skill.skillIcon}
                  className="m-5 h-5 md:h-10"
                />
                {skill.skillName}
              </li>
            ))}
          </ul>
        </div>
        <div className=" p-5">
          <h2 className="text-center font-light text-2xl my-5">Resume</h2>
          <iframe
            className="rounded-md shadow-black shadow-md"
            src="/resume.pdf"
            width="100%"
            height="550"
          />
        </div>
      </section>

      <section id="projects" className="p-5 text-center">
        <h2 className="text-center font-light text-2xl my-5">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {myProjects.map((project) => (
            <ProjectCard
              key={project.id}
              projectUrl={project.projectUrl}
              gitUrl={project.gitUrl}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
