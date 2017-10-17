import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterLinks = () =>
    <div className="right">
        <div className="footer_inner_right">
            <NavLink to={'/home'} activeClassName="active">
                Home
            </NavLink>
            <NavLink to={'/resume'} activeClassName="active">
                Resum&#233;
            </NavLink>
        </div>
        <div className="footer_inner_left">
            <NavLink to={'/projects'} activeClassName="active">
                Projects
            </NavLink>
            <NavLink to={'/contact'} activeClassName="active">
                Contact
            </NavLink>
        </div>
    </div>;

export default FooterLinks;
