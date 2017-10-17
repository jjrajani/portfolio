import React from 'react';
import PROJECTS from './projectsData';
import ProjectItem from './ProjectItem';

const ProjectsList = () =>
    <div className="projects list">
        {PROJECTS.map((p, i) => {
            return <ProjectItem project={p} key={`home_project-${i}`} />;
        })}
    </div>;

export default ProjectsList;
