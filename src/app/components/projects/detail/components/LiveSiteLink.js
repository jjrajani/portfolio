import React from 'react';

const LiveSiteLink = ({ href, text }) => {
    return href
        ? <p>
              <span className="bold">Live Site: </span>
              <a href={href} target="blank">
                  {text}
              </a>
          </p>
        : null;
};

export default LiveSiteLink;
