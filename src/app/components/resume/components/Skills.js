import React from 'react';
import { RESUME } from '../resumeData';

const Skills = () => {
    return (
        <div>
            {RESUME.filter(
                r => r.title !== 'Education' && r.title !== 'Travels'
            ).map(r => {
                return (
                    <div key={r.title} id={r.title} className="sub-content">
                        <p className="title">
                            {r.title}
                        </p>
                        <p>
                            {r.skills}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
