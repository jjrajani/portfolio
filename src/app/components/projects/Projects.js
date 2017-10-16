import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setAndSendPageview } from '../../utils/googleAnalytics';
import { VARS } from '../../VARS';
import './projects.scss';
import { PROJECTS, LAPTOP } from './projectsData';

class Projects extends Component {
    modes = ['All', 'Professional', 'Personal', 'Frontend', 'Fullstack'];

    constructor(props) {
        super(props);
        this.state = {
            mode: 'All'
        };
        setAndSendPageview(window, '/projects');
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="main-content">
                <div id="projects">
                    <div className="sub-content top">
                        <div className="sub-header">
                            <p>Projects</p>
                            <Link to={VARS.routePrefix + '/collaborate'}>
                                Collaborate{' '}
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                            <p>
                                Here are some of my projects and personal work.
                            </p>
                        </div>
                    </div>
                    <div className="sub-content left">
                        {this._subNav()}
                    </div>
                    <div className="sub-content right">
                        {this._projects()}
                    </div>
                </div>
            </div>
        );
    }

    _subNav = () => {
        let modes = this.modes.map((mode, i) => {
            return (
                <p
                    key={i}
                    className={this.state.mode === mode ? 'bright' : 'dim'}
                    onClick={this._toggleVisible.bind(this, mode)}
                >
                    {mode}
                </p>
            );
        });
        return (
            <div className="sub-nav">
                {modes}
            </div>
        );
    };

    _projects = () => {
        let projects = [];
        Object.keys(PROJECTS).forEach((p, i) => {
            projects.push(this._project(PROJECTS[p], p, i));
        });
        return (
            <div className="projects">
                {projects}
            </div>
        );
    };

    _project = (project, p, i) => {
        let mode =
            project.stackLevels.includes(this.state.mode) ||
            this.state.mode === 'All'
                ? 'bright'
                : 'dim';
        return (
            <div key={i} className="project">
                <Link to={VARS.routePrefix + '/project/' + p}>
                    <div className="screen-shot">
                        <div className={mode} />
                        <img
                            className="image"
                            src={project.screenShot}
                            alt={project.appTitle + ' screen shot'}
                        />
                        <img className="laptop" src={LAPTOP} alt="Laptop" />
                    </div>
                    <p className={`title ${mode}`}>
                        {project.appTitle}
                    </p>
                    <p className={`language ${mode}`}>
                        {project.languages.main}
                    </p>
                </Link>
            </div>
        );
    };

    _toggleVisible = (key, e) => {
        let state = this.state;
        state.mode = key;
        this.setState(state);
    };
}

export default Projects;
