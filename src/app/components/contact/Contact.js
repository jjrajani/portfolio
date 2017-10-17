import React from 'react';
import './contact.scss';
import scrollToTop from '../hoc/scrollToTop';
import googleAnalytics from '../hoc/googleAnalytics';
import PageHeader from '../page_header/PageHeader';
import * as c from './components';

const Contact = () =>
    <div className="main-content">
        <div id="contact">
            <div className="sub-content top">
                <PageHeader
                    direction={'back'}
                    page="Contact"
                    link={{ href: '/home', text: 'Home' }}
                />
            </div>
            <div className="sub-content left">
                <c.ContactInfo />
            </div>
            <div className="sub-content right">
                <c.ContactForm />
            </div>
        </div>
    </div>;

export default scrollToTop(googleAnalytics('/contact', Contact));
