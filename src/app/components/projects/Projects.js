import React, { Component } from 'react';
import './projects.scss';
import PageHeader from '../page_header/PageHeader';
import SubNav from '../nav/SubNav';
import ProjectsList from './list/ProjectsList';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import listenForScroll from '../hoc/listenForScroll';
import toggleVisibilityMode from '../hoc/toggleVisibilityMode';

const links = ['All', 'Professional', 'Personal', 'Frontend', 'Fullstack'];

class Projects extends Component {
    render() {
        return (
            <div className="main-content">
                <div id="projects">
                    <div className="sub-content top">
                        <PageHeader
                            direction={'next'}
                            page="Projects"
                            link={{ href: '/collaborate', text: 'Collaborate' }}
                        />
                    </div>
                    <div className="sub-content left">
                        <div
                            className={
                                this.props.fixedNav ? 'fixed' : 'not-fixed'
                            }
                        >
                            <SubNav
                                links={links}
                                visibileMode={this.props.activeLink}
                                onClick={this.props.onClick}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            this.props.fixedNav
                                ? 'sub-content right padded'
                                : 'sub-content right'
                        }
                    >
                        <ProjectsList visibileMode={this.props.activeLink} />
                    </div>
                </div>
            </div>
        );
    }
}

function handleScroll() {
    return window.innerWidth > 768
        ? window.scrollY > 240
        : window.scrollY > 280;
}

export default scrollToTop(
    googleAnalytics(
        '/projects',
        listenForScroll(
            null, // maxScrollPoint
            handleScroll, // onScrollHandler
            toggleVisibilityMode(Projects, 'All' /* default active link */)
        )
    )
);
