import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ page, link, direction }) => {
    return direction === 'next'
        ? <div className="sub-header">
              <p>
                  {page}
              </p>
              <Link to={link.href}>
                  {link.text}{' '}
                  <i className="fa fa-angle-right" aria-hidden="true" />
              </Link>
          </div>
        : <div className="sub-header">
              <Link to={link.href}>
                  <i className="fa fa-angle-left" aria-hidden="true" />{' '}
                  {link.text}
              </Link>
              <p>
                  {page}
              </p>
          </div>;
};

export default PageHeader;
