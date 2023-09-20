/* eslint-disable react/no-unescaped-entities */

import mySkills from "@/data/skills";
import myProjects from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div>
      <section className=" m-10">
        <h2 className="text-center font-light text-2xl my-5">About Me</h2>
        <p className="text-sm text-center font-light bg-gray-200 rounded-md p-7">
          Hello there! I'm an aspiring web developer with a boundless ambition
          to learn and grow in the field. While I may lack experience, my
          determination to become a respected and skilled web developer is
          unwavering. My journey into web development is fueled by a genuine
          passion for coding and a strong desire to create captivating online
          experiences. I understand that the road ahead is challenging, with
          ever-evolving technologies, but I'm ready to embrace the learning
          curve. I see every obstacle as an opportunity for growth and am
          committed to acquiring the necessary skills and staying updated with
          the latest trends. My ambition and dedication are my driving forces,
          propelling me towards my goal of becoming an accomplished web
          developer. In summary, as a newcomer in web development, my ambition
          and eagerness to learn are my strengths. I'm determined to make my
          mark and am excited about the journey ahead.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1  p-5">
          <h2 className="text-center font-light text-2xl my-5">Skills</h2>
          <ul className="flex flex-wrap justify-center items-center bg-gray-200 rounded-md shadow-black shadow-2xl">
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
          <embed
            className="rounded-md shadow-black shadow-2xl"
            src="/resume.pdf"
            type="application/pdf"
            width="100%"
            height="500px"
          />
        </div>
      </section>

      <section className="p-5 text-center">
        <h2 className="text-center font-light text-2xl my-5">Projects</h2>

        {myProjects.map((project) => (
          <ProjectCard
            key={project.id}
            projectUrl={project.projectUrl}
            gitUrl={project.gitUrl}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
          />
        ))}
      </section>
    </div>
  );
}
