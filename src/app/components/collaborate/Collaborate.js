import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import { VARS } from '../../VARS';
import './collaborate.scss';
const collaborate = require('../../assets/collaborate.jpg');
const fingerPoint = require('../../assets/finger_point.jpg');

class Collaborate extends Component {
    constructor(props) {
        super(props);
        setAndSendPageview(window, '/collaborate');
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="main-content">
                <div id="collaborate">
                    <div className="sub-content top">
                        <div className="sub-header">
                            <p>Collaborate</p>
                            <Link to={VARS.routePrefix + '/contact'}>
                                Contact{' '}
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                        <div className="sub-content left">
                            <div className="title-wrapper">
                                <p className="title one">{`COLLABORATE`}</p>
                                <p className="title two">{`SOLUTIONS`}</p>
                                <p className="title three highlight">
                                    {`Industriously. Meticulously. Superlatively.`}
                                </p>
                            </div>
                            <div className="blurb-wrapper">
                                <p className="blurb">
                                    <span className="bold">
                                        Diligent and hard working.
                                    </span>
                                    {` I love finding simple solutions to complex problems.  I work tirelessly creating intuitive user interfaces and bulletproof logic.`}
                                </p>
                                <p className="blurb">
                                    <span className="bold">
                                        Careful and precise.
                                    </span>
                                    {` I deliver products that emobdy client and designer vision.  Beyond the code itself, my favorite part of the job is client satisfaction.`}
                                </p>
                                <p className="blurb">
                                    <span className="bold">
                                        Gumption unparalleled.
                                    </span>
                                    {` The word impossible means nothing to me.`}
                                </p>
                                <p className="blurb">
                                    <span className="bold">
                                        We should work together
                                    </span>
                                    {` if you enjoy hard work, learning something new, and always being better than yesterday.`}
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="collaborate-image">
                                <img
                                    src={collaborate}
                                    alt="Let's work together"
                                    title="Let's Collaborate"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sub-content right">
                        <div className="sub-header">
                            <p>Referrals</p>
                        </div>
                        <div className="referrals">
                            <div
                                className="referral img"
                                style={{
                                    backgroundImage: `url(${fingerPoint})`
                                }}
                            />
                            <a
                                href="https://www.linkedin.com/in/naelalismail/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BwSPpOWrvRtmW3UTNND3aGQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile"
                                alt="Nael Alismail's Linkedin"
                                className="referral"
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
                                    <p className="language">
                                        Application Architect
                                    </p>
                                    <p className="language">
                                        My Previous Project Manager
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collaborate;
