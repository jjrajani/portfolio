import React from 'react';
import './resume.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import listenForScroll from '../hoc/listenForScroll';
import PageHeader from '../page_header/PageHeader';
import * as c from './components';
import { RESUME, linkScrollPoints } from './resumeData';

import toggleVisibilityMode from '../hoc/toggleVisibilityMode';
import SubNav from '../nav/SubNav';

const code = require('../../assets/code_two.png');

const Resume = ({ fixedNav }) =>
    <div className="main-content">
        <div id="resume">
            <div className="sub-content top">
                <PageHeader
                    direction={'next'}
                    page="Resumé"
                    link={{ href: '/projects', text: 'Projects' }}
                />
            </div>
            <div className="sub-content left">
                <div className={fixedNav ? 'fixed' : ''}>
                    <c.ResumeLink />
                    <SubNav
                        links={RESUME.map(r => r.title)}
                        onClick={scrollToPosition}
                    />
                </div>
            </div>
            <div className="sub-content right">
                <div
                    className="resume img"
                    style={{
                        backgroundImage: `url(${code})`
                    }}
                />
                <c.Skills />
                <c.Education />
                <c.Travels />
            </div>
        </div>
    </div>;

function scrollToPosition(link) {
    window.scrollTo(0, linkScrollPoints[link]);
}

export default scrollToTop(
    googleAnalytics(
        '/resume',
        listenForScroll(
            251, // max scroll point
            null, // use default onScroll
            toggleVisibilityMode(
                Resume,
                'Frontend', // Default active Link
                scrollToPosition // onLinkClick
            )
        )
    )
);
