import React from 'react';
import { PROJECTS } from '../projectsData';
import ProjectItem from './ProjectItem';

const ProjectsList = ({ visibileMode }) => {
    return (
        <div className="projects">
            {Object.keys(PROJECTS).map((p, index) => {
                return (
                    <ProjectItem
                        key={`${index}-${p}`}
                        project={PROJECTS[p]}
                        projectName={p}
                        index={index}
                        visibileMode={visibileMode}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsList;
