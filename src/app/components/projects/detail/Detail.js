import React, { Component } from 'react';
import './detail.scss';
import { PROJECTS } from '../projectsData';
import * as c from './components';
import scrollToTop from '../../hoc/scrollToTop';

class Detail extends Component {
    constructor(props) {
        super(props);
        let { projectName } = props.match.params;
        this.state = {
            project: PROJECTS[projectName]
        };
    }
    render() {
        let { project } = this.state;
        return (
            <div id="detail">
                <div className="project">
                    <div className="left">
                        <c.ProjectSpec project={project} />
                        <c.DetailsSpec details={project.details} />
                        <c.TechnologySpec technologies={project.technology} />
                        <c.LiveSiteLink
                            href={project.link}
                            text={project.appTitle}
                        />
                    </div>
                    <div className="right">
                        <c.ScreenShot
                            screenShot={project.screenShot}
                            appTitle={project.appTitle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default scrollToTop(Detail);
