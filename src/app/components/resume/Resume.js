import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import { VARS } from '../../VARS';
import './resume.scss';
import { RESUME } from './resumeData';
const code = require('../../assets/code_two.jpg');

class ResumeRefac extends Component {
    constructor(props) {
        super(props);
        setAndSendPageview(window, '/resume');
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

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
        )[0].skills.map(s => {
            return (
                <p>
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
                        <div className="sub-header">
                            <p>Resum&#233;</p>
                            <Link to={VARS.routePrefix + '/projects'}>
                                Projects{' '}
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="sub-content left">
                        <div className="resume_download">
                            {this.downloadResumeLink()}
                        </div>
                        <div className="sub-nav">
                            {this.renderLinks()}
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

export default ResumeRefac;
