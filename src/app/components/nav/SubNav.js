import React from 'react';

const SubNav = ({ links, visibileMode, onClick }) => {
    let linksHTML = links.map((mode, i) => {
        return (
            <p
                key={i}
                className={visibileMode === mode ? 'bright' : 'dim'}
                onClick={onClick.bind(this, mode)}
            >
                {mode}
            </p>
        );
    });
    return (
        <div className="sub-nav">
            {linksHTML}
        </div>
    );
};

export default SubNav;
