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
    constructor(props) {
        super(props);
        this.state = {
            fixedTop: false
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }
    handleScroll = () => {
        console.log(window.scrollY);
        let pastScrollPoint = window.scrollY > 278;
        if (this.state.fixedTop !== pastScrollPoint) {
            console.log('fixing');
            this.setState({ fixedTop: pastScrollPoint });
        }
    };
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
                                this.state.fixedTop ? 'fixed' : 'not-fixed'
                            }
                        >
                            <SubNav
                                modes={modes}
                                visibileMode={this.props.visibileMode}
                                toggleVisible={this.props.toggleVisible}
                            />
                        </div>
                    </div>
                    <div
                        className={
                            this.state.fixedTop
                                ? 'sub-content right padded'
                                : 'sub-content right'
                        }
                    >
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
