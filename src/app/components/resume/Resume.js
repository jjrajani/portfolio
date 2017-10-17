import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './resume.scss';
import { RESUME } from './resumeData';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import listenForScroll from '../hoc/listenForScroll';
import PageHeader from '../page_header/PageHeader';

const code = require('../../assets/code_two.png');

class Resume extends Component {
    downloadResumeLink() {
        const resumeLink =
            'https://docs.google.com/document/d/1yOKCl-K9FTa4ZWGj-j4S-yJ5dAlAgG4H0Qpb6lrJFcg/edit?usp=sharing';
        return (
            <a href={resumeLink} target="blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" />Dowload PDF
            </a>
        );
    }

    renderLinks() {
        return RESUME.map(r => {
            return (
                <a
                    href=""
                    key={r.title}
                    onClick={this.scrollToPosition.bind(this, r.scrollPoint)}
                >
                    {r.title}
                </a>
            );
        });
    }

    renderSkills() {
        return RESUME.filter(
            r => r.title !== 'Education' && r.title !== 'Travels'
        ).map(r => {
            return (
                <div key={r.title} id={r.title} className="sub-content">
                    <p className="title">
                        {r.title}
                    </p>
                    <p>
                        {r.skills}
                    </p>
                </div>
            );
        });
    }

    renderEducation() {
        let schools = RESUME.filter(
            r => r.title === 'Education'
        )[0].skills.map((s, i) => {
            return (
                <p key={i}>
                    <span className="bold">{s.title} </span>
                    <a href={s.linkURL} target="blank">
                        {s.linkText}{' '}
                    </a>
                    - {s.date}
                </p>
            );
        });
        return (
            <div id="education" className="sub-content">
                <p className="title">Education</p>
                {schools}
            </div>
        );
    }

    renderTravels() {
        let travels = RESUME.filter(r => r.title === 'Travels')[0].skills;
        return (
            <div id="travels" className="sub-content">
                <p className="title">Travels</p>
                <p>
                    {travels}
                </p>
            </div>
        );
    }

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
                            <div className="resume_download">
                                {this.downloadResumeLink()}
                            </div>
                            <div className="sub-nav">
                                {this.renderLinks()}
                            </div>
                        </div>
                    </div>
                    <div className="sub-content right">
                        <div
                            className="resume img"
                            style={{
                                backgroundImage: `url(${code})`
                            }}
                        />
                        {this.renderSkills()}
                        {this.renderEducation()}
                        {this.renderTravels()}
                    </div>
                </div>
            </div>
        );
    }

    scrollToPosition(y, e) {
        e.preventDefault();
        window.scrollTo(0, y);
    }
}

export default scrollToTop(
    googleAnalytics(listenForScroll(Resume, 251), '/resume')
);
