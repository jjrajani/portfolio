import React from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';

const links = [
    { href: '/home', text: 'Home' },
    { href: '/resume', text: 'Resumé' },
    { href: '/projects', text: `Projects` },
    { href: '/collaborate', text: `Collaborate` },
    { href: '/contact', text: `Contact` }
];

const Nav = () =>
    <div id="nav">
        {links.map((l, i) => {
            return (
                <NavLink key={i + l.text} to={l.href} activeClassName="active">
                    {l.text}
                </NavLink>
            );
        })}
    </div>;

export default Nav;
