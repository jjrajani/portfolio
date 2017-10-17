import React from 'react';
import { LAPTOP } from '../projectsData';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project, projectName, index, visibileMode }) => {
    let mode =
        project.stackLevels.includes(visibileMode) || visibileMode === 'All'
            ? 'bright'
            : 'dim';
    return (
        <div key={index} className="project">
            <Link to={'/project/' + projectName}>
                <div className="screen-shot">
                    <div className={mode} />
                    <img
                        className="image"
                        src={project.screenShot}
                        alt={project.appTitle + ' screen shot'}
                    />
                    <img className="laptop" src={LAPTOP} alt="Laptop" />
                </div>
                <p className={`title ${mode}`}>
                    {project.appTitle}
                </p>
                <p className={`language ${mode}`}>
                    {project.languages.main}
                </p>
            </Link>
        </div>
    );
};

export default ProjectItem;
