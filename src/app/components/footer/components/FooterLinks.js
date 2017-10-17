import React from 'react';
import { NavLink } from 'react-router-dom';

const footerLinks = [
    [{ href: '/home', text: 'Home' }, { href: '/resume', text: 'Resumé' }],
    [
        { href: '/projects', text: 'Projects' },
        { href: '/contact', text: 'Contact' }
    ]
];

const FooterLinks = () =>
    <div className="right">
        {footerLinks.map((cols, i) => {
            return (
                <div
                    key={`footer_col_${i}`}
                    className={`links_col width_${footerLinks.length}`}
                >
                    {cols.map((link, a) => {
                        return (
                            <NavLink
                                key={`footer_link_${i}_${a}`}
                                to={link.href}
                                activeClassName="active"
                            >
                                {link.text}
                            </NavLink>
                        );
                    })}
                </div>
            );
        })}
    </div>;

export default FooterLinks;
