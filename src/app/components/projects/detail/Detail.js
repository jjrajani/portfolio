import React, { Component } from 'react';
import './detail.scss';
import { PROJECTS, LAPTOP } from "../projectsJSON";

class Detail extends Component {
  constructor(props) {
    super(props);
    let projectName = props.match.params.projectName;
    this.state = {
      project: PROJECTS[projectName]
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let project = this.state.project;
    return (
       <div id="detail">
         <div className="project">
           <div className="left">
             <p className="app-title title">{project.appTitle}</p>
             <p className="size">{project.scale}</p>
             <p className="blurb">{project.blurb}</p>
             { project.astrisk ? <p className="astrisk">{project.astrisk}</p> : null }
             <p><span className="bold">Client: </span>{project.client}</p>
             { this._projectDetails(project.details) }
             { this._projectTechnology(project.technology) }
             { project.link ? <p><span className="bold">Live Site: </span><a href={project.link} target="blank">{project.title}</a></p> : null }
           </div>
           <div className="right">
             <div className="screen-shot">
               <img className="image" src={project.screenShot} alt="CulturaLink screen shot"/>
               <img className="laptop" src={LAPTOP} alt="Laptop"/>
             </div>
           </div>
         </div>
       </div>
    );
  }

  _projectDetails = (details) => {
    details = details.map((d, i) => {
      return <li key={i}><p className="list-item">{d}</p></li>;
    });
    return (
      <ul>
        <li className="list-head"><p className="title"><span className="bold">Details</span></p></li>
        {details}
      </ul>
    );
  }

  _projectTechnology = (techs) => {
    techs = techs.map((t, i) => {
      return <li key={i}><p className="list-item">{t}</p></li>;
    });
    return (
      <ul>
        <li className="list-head"><p className="title"><span className="bold">Technology</span></p></li>
        {techs}
      </ul>
    );
  }

}

export default Detail;
