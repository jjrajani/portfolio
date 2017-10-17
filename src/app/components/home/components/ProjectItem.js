import React from 'react';
import { Link } from 'react-router-dom';

const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

const ProjectItem = ({ project }) => {
    return (
        <Link to={`/project/${project.href}`}>
            <div className="project list_item">
                <div className="screen-shot">
                    <img
                        className="image"
                        src={project.screenShot}
                        alt={project.alt}
                    />
                    <img className="laptop" src={laptop} alt="Laptop" />
                </div>
                <p className="title">
                    {project.appTitle}
                </p>
                <p className="language">
                    {project.languages.main}
                </p>
            </div>
        </Link>
    );
};

export default ProjectItem;
