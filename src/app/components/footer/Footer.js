import React from 'react';
import './footer.scss';
import * as c from './components';

const Footer = () =>
    <div id="footer">
        <c.SocialMedias />
        <c.ScrollToTop />
        <c.FooterLinks />
    </div>;

export default Footer;
