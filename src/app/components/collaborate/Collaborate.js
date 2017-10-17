import React from 'react';
import './collaborate.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import PageHeader from '../page_header/PageHeader';
import * as c from './components';

const collaborate = require('../../assets/collaborate.png');

const Collaborate = () =>
    <div className="main-content">
        <div id="collaborate">
            <div className="sub-content top">
                <PageHeader
                    direction={'next'}
                    page="Collaborate"
                    link={{ href: '/contact', text: 'Contact' }}
                />
                <div className="sub-content left">
                    <c.PageTitle />
                    <c.Blurb />
                </div>
                <div className="right">
                    <div className="collaborate-image">
                        <img
                            src={collaborate}
                            alt="Let's work together"
                            title="Let's Collaborate"
                        />
                    </div>
                </div>
            </div>
            <div className="sub-content right">
                <c.Referrals />
            </div>
        </div>
    </div>;

export default scrollToTop(googleAnalytics('/colaborate', Collaborate));
