import React, { Component } from 'react';
import './nav.scss';
import { VARS } from '../../VARS';
import { NavLink } from 'react-router-dom';

const links = [
    { href: '/home', text: 'Home' },
    { href: '/resume', text: 'Resumé' },
    { href: '/projects', text: `Projects` },
    { href: '/collaborate', text: `Collaborate` },
    { href: '/contact', text: `Contact` }
];

class Nav extends Component {
    render() {
        return (
            <div id="nav">
                {links.map(l => {
                    return (
                        <NavLink
                            to={VARS.routePrefix + l.href}
                            activeClassName="active"
                        >
                            {l.text}
                        </NavLink>
                    );
                })}
            </div>
        );
    }
}

export default Nav;
