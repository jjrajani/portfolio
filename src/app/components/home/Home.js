import React from 'react';
import './home.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import PageHeader from '../page_header/PageHeader';
import * as c from './components';

const logo = require('../../assets/lost-in-the-trees.png');

const Home = () =>
    <div className="main-content">
        <div id="home">
            <div className="sub-content top">
                <PageHeader
                    direction={'next'}
                    page="Home"
                    link={{ href: '/resume', text: 'Resumé' }}
                />
                <c.PageTitle />
                <div className="right">
                    <div className="home-image">
                        <img src={logo} alt="Lost in the trees" />
                    </div>
                </div>
            </div>
            <div className="sub-content right">
                <PageHeader
                    direction={'next'}
                    page="Projects"
                    link={{ href: '/projects', text: 'See more' }}
                />
                <c.ProjectsList />
            </div>
        </div>
    </div>;

export default scrollToTop(googleAnalytics('/home', Home));
