import React from 'react';

function scrollUp(e) {
    e.preventDefault();
    document.getElementById('app').scrollIntoView();
}

const ScrollToTop = () =>
    <div className="center">
        <a href="" onClick={scrollUp.bind(this)}>
            <i className="fa fa-long-arrow-up" />
        </a>
    </div>;

export default ScrollToTop;
