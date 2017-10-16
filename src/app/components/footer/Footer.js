import React, { Component } from 'react';
import './footer.scss';
import { VARS } from '../../VARS';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="left">
                    <a
                        href="https://www.linkedin.com/in/jenna-rajani/"
                        target="blank"
                    >
                        <i
                            className="fa fa-linkedin-square"
                            aria-hidden="true"
                        />Linkedin
                    </a>
                    <a href="http://www.github.com/jjrajani" target="blank">
                        <i className="fa fa-github" aria-hidden="true" />Github
                    </a>
                </div>
                <div className="center">
                    <a href="" onClick={this.scrollUp.bind(this)}>
                        <i className="fa fa-long-arrow-up" />
                    </a>
                </div>
                <div className="right">
                    <div className="footer_inner_right">
                        <NavLink
                            to={VARS.routePrefix + '/home'}
                            activeClassName="active"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={VARS.routePrefix + '/resume'}
                            activeClassName="active"
                        >
                            Resum&#233;
                        </NavLink>
                    </div>
                    <div className="footer_inner_left">
                        <NavLink
                            to={VARS.routePrefix + '/projects'}
                            activeClassName="active"
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to={VARS.routePrefix + '/contact'}
                            activeClassName="active"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    scrollUp(e) {
        e.preventDefault();
        document.getElementById('app').scrollIntoView();
    }
}

export default Footer;
