import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import PageHeader from '../page_header/PageHeader';

const logo = require('../../assets/lost-in-the-trees.png');
const culturaLink = require('../../assets/culturalink.png');
const theLabz = require('../../assets/the_labz.png');
const mailChimp = require('../../assets/mail-chimp.png');
const twinBridgesLake = require('../../assets/twin_bridges_lake.png');
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

const Home = () =>
    <div className="main-content">
        <div id="home">
            <div className="sub-content top">
                <PageHeader
                    direction={'next'}
                    page="Home"
                    link={{ href: '/resume', text: 'Resumé' }}
                />
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
                        <p className="blurb">
                            <Link to={'/collaborate'} className="highlight">
                                {`I am currently seeking my next project!`}
                            </Link>
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
                    <Link to={'/projects'}>
                        See more{' '}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    </Link>
                </div>
                <div className="projects list">
                    <Link to={'/project/theLabz'}>
                        <div className="project list_item">
                            <div className="screen-shot">
                                <img
                                    className="image"
                                    src={theLabz}
                                    alt="CulturaLink screen shot"
                                />
                                <img
                                    className="laptop"
                                    src={laptop}
                                    alt="Laptop"
                                />
                            </div>
                            <p className="title">
                                The Labz Music Collaboration
                            </p>
                            <p className="language">MERN</p>
                        </div>
                    </Link>
                    <Link to={'/project/twinBridgesLake'}>
                        <div className="project list_item">
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
                    <Link to={'/project/culturaLink'}>
                        <div className="project list_item">
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
                    <Link to={'/project/mailChimp'}>
                        <div className="project list_item">
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
                            <p className="language">JavaScript / SASS</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>;

export default scrollToTop(googleAnalytics(Home, '/home'));
