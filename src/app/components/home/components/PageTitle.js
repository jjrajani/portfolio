import React from 'react';
import { Link } from 'react-router-dom';

/*
  Toggle visibility of "I am currently seeking my next project"
  on home page
*/
const jobSeeking = false;

const PageTitle = () => (
    <div className="sub-content left">
        <div className="title-wrapper">
            <p className="title one">WEB DEVELOPER</p>
            <p className="title two">FRONT–END ENGINEER</p>
        </div>
        <div className="blurb-wrapper">
            <p className="blurb">
                {`I'm Jenna Rajani and I love code for
                      it's endless possibility.`}
            </p>
            <p className="blurb">
                {`I have built several large-scale
                        applications as well as many small, design
                        centered, applications. When I'm not
                        coding you'll find me either playing
                        paino or planning my next excurssion.`}
            </p>
            {jobSeeking && (
                <p className="blurb">
                    <Link to={'/collaborate'} className="highlight">
                        {`I am currently seeking my next project!`}
                    </Link>
                </p>
            )}
        </div>
    </div>
);

export default PageTitle;
