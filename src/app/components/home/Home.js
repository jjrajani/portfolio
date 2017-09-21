import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import { VARS } from '../../VARS';
import './home.scss';
const logo = require('../../assets/lost-in-the-trees.png');
const culturaLink = require('../../assets/culturalink.png');
const ADP = require('../../assets/ADP.png');
const mailChimp = require('../../assets/mail-chimp.png');
const twinBridgesLake = require('../../assets/twin_bridges_lake.png');
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

class Home extends Component {
    constructor(props) {
        super(props);
        setAndSendPageview(window, '/home');
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="main-content">
                <div id="home">
                    <div className="sub-content top">
                        <div className="sub-header">
                            <p>Home</p>
                            <Link to={VARS.routePrefix + '/resume'}>
                                Resum&#233;{' '}
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                        <div className="sub-content left">
                            <div className="title-wrapper">
                                <p className="title one">WEB DEVELOPER</p>
                                <p className="title two">FRONT–END ENGINEER</p>
                            </div>
                            <div className="blurb-wrapper">
                                <p className="blurb">
                                    I&#8216;m Jenna Rajani and love code for
                                    it&#8216;s endless possibility. I enjoy
                                    focusing on the user-experience as well as
                                    process efficiency while creating web
                                    applications.
                                </p>
                                <p className="blurb">
                                    I have contributed to several large-scale
                                    applications and many small, design
                                    centered, applications. When I&#8216;m not
                                    coding you&#8216;ll find me either playing
                                    paino or planning my next excurssion.
                                </p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="home-image">
                                <img src={logo} alt="Lost in the trees" />
                            </div>
                        </div>
                    </div>
                    <div className="sub-content right">
                        <div className="sub-header">
                            <p>Projects</p>
                            <Link to={VARS.routePrefix + '/projects'}>
                                See more{' '}
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                        <div className="projects">
                            <Link
                                to={
                                    VARS.routePrefix +
                                    '/project/twinBridgesLake'
                                }
                            >
                                <div className="project">
                                    <div className="screen-shot">
                                        <img
                                            className="image"
                                            src={twinBridgesLake}
                                            alt="Twin Bridges Lake screen shot"
                                        />
                                        <img
                                            className="laptop"
                                            src={laptop}
                                            alt="Laptop"
                                        />
                                    </div>
                                    <p className="title">Twin Bridges Lake</p>
                                    <p className="language">React</p>
                                </div>
                            </Link>
                            <Link to={VARS.routePrefix + '/project/ADP'}>
                                <div className="project">
                                    <div className="screen-shot">
                                        <img
                                            className="image"
                                            src={ADP}
                                            alt="CulturaLink screen shot"
                                        />
                                        <img
                                            className="laptop"
                                            src={laptop}
                                            alt="Laptop"
                                        />
                                    </div>
                                    <p className="title">
                                        ADP Monitoring Services
                                    </p>
                                    <p className="language">React</p>
                                </div>
                            </Link>
                            <Link
                                to={VARS.routePrefix + '/project/culturaLink'}
                            >
                                <div className="project">
                                    <div className="screen-shot">
                                        <img
                                            className="image"
                                            src={culturaLink}
                                            alt="CulturaLink screen shot"
                                        />
                                        <img
                                            className="laptop"
                                            src={laptop}
                                            alt="Laptop"
                                        />
                                    </div>
                                    <p className="title">CulturaLink</p>
                                    <p className="language">React</p>
                                </div>
                            </Link>
                            <Link to={VARS.routePrefix + '/project/mailChimp'}>
                                <div className="project">
                                    <div className="screen-shot">
                                        <img
                                            className="image"
                                            src={mailChimp}
                                            alt="CulturaLink screen shot"
                                        />
                                        <img
                                            className="laptop"
                                            src={laptop}
                                            alt="Laptop"
                                        />
                                    </div>
                                    <p className="title">MailChimp</p>
                                    <p className="language">Ruby on Rails</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
