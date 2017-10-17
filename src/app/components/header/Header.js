import React from 'react';
import { Nav } from '../';
import { Link } from 'react-router-dom';

const Header = () =>
    <div className="app-header">
        <div className="left">
            <Link to={'/home'} className="name">
                Jenna Rajani
            </Link>
            <div className="bottom">
                <p>Web Developer</p>
                <a
                    href="http://www.github.com/jjrajani"
                    target="blank"
                    alt="Jenna Rajani web developer github link"
                >
                    <i className="fa fa-github" aria-hidden="true" />
                </a>
            </div>
        </div>
        <Nav />
    </div>;

export default Header;
