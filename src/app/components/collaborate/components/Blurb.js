import React from 'react';

import BLURBS from './blurbData';

const Blurb = () =>
    <div className="blurb-wrapper">
        {BLURBS.map((b, i) => {
            return (
                <p key={`collaborate-blurb-${i}`} className="blurb">
                    <span className="bold">
                        {b.title}
                    </span>
                    {b.text}
                </p>
            );
        })}
    </div>;

export default Blurb;
