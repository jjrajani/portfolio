import React from 'react';
import { RESUME } from '../resumeData';

function scrollToPosition(y, e) {
    e.preventDefault();
    window.scrollTo(0, y);
}

const SubNav = () => {
    return (
        <div className="sub-nav">
            {RESUME.map(r => {
                return (
                    <a
                        href=""
                        key={r.title}
                        onClick={scrollToPosition.bind(this, r.scrollPoint)}
                    >
                        {r.title}
                    </a>
                );
            })}
        </div>
    );
};

export default SubNav;
