import React from 'react';
import { RESUME } from '../resumeData';

const Education = () => {
    let schools = RESUME.filter(
        r => r.title === 'Education'
    )[0].skills.map((s, i) => {
        return (
            <p key={i}>
                <span className="bold">{s.title} </span>
                <a href={s.linkURL} target="blank">
                    {s.linkText}{' '}
                </a>
                - {s.date}
            </p>
        );
    });
    return (
        <div id="education" className="sub-content">
            <p className="title">Education</p>
            {schools}
        </div>
    );
};

export default Education;
