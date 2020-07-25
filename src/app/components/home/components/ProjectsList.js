import React from "react";
import ProjectItem from "./ProjectItem";
import { PROJECTS } from "../../projects/projectsData";
const homeProjects = [
  PROJECTS.eureka,
  PROJECTS.myDinova,
  PROJECTS.twinBridgesLake,
  PROJECTS.cageSmash
];

const ProjectsList = () => (
  <div className="projects list">
    {homeProjects.map((p, i) => {
      return <ProjectItem project={p} key={`home_project-${i}`} />;
    })}
  </div>
);

export default ProjectsList;
