import React, { Component } from 'react';
import './resume.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import listenForScroll from '../hoc/listenForScroll';
import PageHeader from '../page_header/PageHeader';
import * as c from './components';

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
                            <c.SubNav />
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

export default scrollToTop(
    googleAnalytics(listenForScroll(Resume, 251), '/resume')
);
