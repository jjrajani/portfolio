import React from 'react';

const ProjectSpec = ({ project }) =>
    <div>
        <p className="app-title title">
            {project.appTitle}
        </p>
        <p className="size">
            {project.scale}
        </p>
        <p className="blurb">
            {project.blurb}
        </p>
        <p>
            <span className="bold">Client: </span>
            {project.client}
        </p>
    </div>;

export default ProjectSpec;
