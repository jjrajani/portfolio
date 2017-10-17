import React from 'react';
const fingerPoint = require('../../../assets/finger_point.png');

const Referrals = () =>
    <div>
        <div className="sub-header">
            <p>Referrals</p>
        </div>
        <div className="referrals list">
            <div
                className="referral list_item img"
                style={{
                    backgroundImage: `url(${fingerPoint})`
                }}
            />
            <a
                href="https://www.linkedin.com/in/naelalismail/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BwSPpOWrvRtmW3UTNND3aGQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile"
                alt="Nael Alismail's Linkedin"
                className="referral list_item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div>
                    <p className="text">
                        {`I worked very closely with Jenna on
                multiple projects. I found Jenna to be
                an outstanding engineer. She's capable
                of solving problems quickly. Although
                she's still early in her career, she
                sets herself apart with her ability to
                problem solve and work independently.
                She's my go to person when working with
                JavaScript, styling or front-end
                frameworks. She'll make a great addition
                to any team and will quickly become the
                person you rely on to get projects
                finished.`}
                    </p>
                </div>
                <div className="referrer">
                    <p className="title">Nael Alismail</p>
                    <p className="language">Application Architect</p>
                    <p className="language">My Previous Project Manager</p>
                </div>
            </a>
        </div>
    </div>;

export default Referrals;
