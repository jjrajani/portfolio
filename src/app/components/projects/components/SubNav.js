import React from 'react';

const SubNav = ({ modes, visibileMode, toggleVisible }) => {
    let modesHTML = modes.map((mode, i) => {
        return (
            <p
                key={i}
                className={visibileMode === mode ? 'bright' : 'dim'}
                onClick={toggleVisible.bind(this, mode)}
            >
                {mode}
            </p>
        );
    });
    return (
        <div className="sub-nav">
            {modesHTML}
        </div>
    );
};

export default SubNav;
