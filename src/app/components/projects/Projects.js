import React, { Component } from 'react';
import './projects.scss';
import PageHeader from '../page_header/PageHeader';
import SubNav from './components/SubNav';
import ProjectsList from './list/ProjectsList';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import listenForScroll from '../hoc/listenForScroll';
import toggleVisibilityMode from '../hoc/toggleVisibilityMode';

const modes = ['All', 'Professional', 'Personal', 'Frontend', 'Fullstack'];

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
                        <div className={this.props.fixedNav ? 'fixed' : ''}>
                            <SubNav
                                modes={modes}
                                visibileMode={this.props.visibileMode}
                                toggleVisible={this.props.toggleVisible}
                            />
                        </div>
                    </div>
                    <div className="sub-content right">
                        <ProjectsList visibileMode={this.props.visibileMode} />
                    </div>
                </div>
            </div>
        );
    }
}

export default scrollToTop(
    googleAnalytics(
        listenForScroll(toggleVisibilityMode(Projects, modes, 'All'), 237),
        '/projects'
    )
);
