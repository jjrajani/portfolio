import React from 'react';
import { RESUME } from '../resumeData';

const Education = () => {
    let travels = RESUME.filter(r => r.title === 'Travels')[0].skills;
    return (
        <div id="travels" className="sub-content">
            <p className="title">Travels</p>
            <p>
                {travels}
            </p>
        </div>
    );
};

export default Education;
