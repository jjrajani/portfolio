import React from 'react';

const TechnologySpec = ({ technologies }) =>
    <ul>
        <li className="list-head">
            <p className="title">
                <span className="bold">Technology</span>
            </p>
        </li>
        {technologies.map((t, i) => {
            return (
                <li key={i}>
                    <p className="list-item">
                        {t}
                    </p>
                </li>
            );
        })}
    </ul>;

export default TechnologySpec;
