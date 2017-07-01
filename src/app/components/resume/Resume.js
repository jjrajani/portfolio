import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { VARS } from "../../VARS";
import './resume.scss';
const resume = require("../../assets/Resume.pdf");

class Resume extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let resumeLink = VARS.github === true
    ? resume
    : "https://jjrajani.github.io/portfolio/static/media/Resume.ab7b824e.pdf";
    return (
      <div className="main-content">
        <div id="resume">
          <div className="sub-content top">
            <div className="sub-header">
              <p>Resum&#233;</p>
              <Link to={VARS.routePrefix + "/projects"}>Projects <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
            </div>
          </div>
          <div className="sub-content left">
            <div className="resume_download">
              <a href={resumeLink} target="blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>Dowload PDF</a>
            </div>
            <div className="sub-nav">
              <a href="#frontend">Frontend</a>
              <a href="#design">Design</a>
              <a href="#backend">Backend</a>
              <a href="#frameworks">Frameworks</a>
              <a href="#build_tools">Build Tools</a>
              <a href="#environments">Environments</a>
              <a href="#education">Education</a>
              <a href="#travels">Travels</a>
            </div>
          </div>
          <div className="sub-content right">
            <div id="frontend" className="sub-content">
              <p className="title">Frontend</p>
              <p>JavaScript, TypeScript, jQuery, AJAX, REST api</p>
            </div>
            <div id="design" className="sub-content">
              <p className="title">Design</p>
              <p>Responsive Web Design, HTML, CSS3, SASS, Bootstrap</p>
            </div>
            <div id="backend" className="sub-content">
              <p className="title">Backend</p>
              <p>Node.js, Express, Sequelize, Jade, SQL, MySQL, Postgres</p>
            </div>
            <div id="frameworks" className="sub-content">
              <p className="title">Frameworks</p>
              <p>React, AngularJS, Ruby on Rails, D3.js, HighCharts</p>
            </div>
            <div id="build_tools" className="sub-content">
              <p className="title">Build Tools</p>
              <p>Webpack, Git, Gulp</p>
            </div>
            <div id="environments" className="sub-content">
              <p className="title">Environments</p>
              <p>Agile, SCRUM, Waterfall, Office, Remote</p>
            </div>
            <div id="education" className="sub-content">
              <p className="title">Education</p>
              <p>
                <span className="bold">Front–End Engineering </span>
                <a href="http://www.theironyard.com" target="blank">The Iron Yard </a>
                 - Atlanta, 2016
              </p>
              <p>
                <span className="bold">All Things Considered </span>
                <a href="http://www.hunter.cuny.edu/main/" target="blank">CUNY Hunter </a>
                 - NYC, 2005-2008
              </p>
              <p>
                <span className="bold">Montessori Beginnings </span>
                <a href="http://www.opmontessori.com" target="blank">Old Peachtree </a>
                 - until 6th grade
              </p>
            </div>
            <div id="travels" className="sub-content">
              <p className="title">Travel</p>
              <p>30 US States & Canada, Costa Rica, France, UK, Uganda, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
