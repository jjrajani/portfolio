import React, { Component } from 'react';
import './nav.scss';
import { VARS } from "../../VARS";
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
       <div id="nav">
         <NavLink to={VARS.routePrefix + "/home"} activeClassName="active">Home</NavLink>
         <NavLink to={VARS.routePrefix + "/resume"} activeClassName="active">Resum&#233;</NavLink>
         <NavLink to={VARS.routePrefix + "/projects"} activeClassName="active">Projects</NavLink>
         <NavLink to={VARS.routePrefix + "/contact"} activeClassName="active">Contact</NavLink>
       </div>
    );
  }
}

export default Nav;
