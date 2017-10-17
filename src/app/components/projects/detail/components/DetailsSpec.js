import React from 'react';

const DetailsSpec = ({ details }) =>
    <ul>
        <li className="list-head">
            <p className="title">
                <span className="bold">Details</span>
            </p>
        </li>
        {details.map((d, i) => {
            return (
                <li key={i}>
                    <p className="list-item">
                        {d}
                    </p>
                </li>
            );
        })}
    </ul>;

export default DetailsSpec;
