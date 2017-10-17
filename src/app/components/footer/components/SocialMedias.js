import React from 'react';

const socialMedias = [
    {
        href: 'https://www.linkedin.com/in/jenna-rajani/',
        icon: 'fa fa-linkedin-square',
        text: 'Linkedin'
    },
    {
        href: 'http://www.github.com/jjrajani',
        icon: 'fa fa-github',
        text: 'Github'
    }
];

const SocialMedias = () =>
    <div className="left">
        {socialMedias.map(sm => {
            return (
                <a key={sm.text} href={sm.href} target="blank">
                    <i className={sm.icon} aria-hidden="true" />
                    {sm.text}
                </a>
            );
        })}
    </div>;

export default SocialMedias;
