import React, { Component } from 'react';
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

class Resume extends Component {
    render() {
        return (
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
                        <div className={this.props.fixedNav ? 'fixed' : ''}>
                            <c.ResumeLink />
                            <SubNav
                                links={RESUME.map(r => r.title)}
                                visibileMode={this.props.activeLink}
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
            </div>
        );
    }
}

function scrollToPosition(y, e) {
    e.preventDefault();
    window.scrollTo(0, linkScrollPoints[y]);
}

export default scrollToTop(
    googleAnalytics(
        listenForScroll(
            toggleVisibilityMode(Resume, 'Frontend', scrollToPosition),
            251
        ),
        '/resume'
    )
);
