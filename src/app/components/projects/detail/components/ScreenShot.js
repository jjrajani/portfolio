import React from 'react';
import { LAPTOP } from '../../projectsData';

const ScreenShot = ({ screenShot, appTitle }) =>
    <div className="screen-shot">
        <img
            className="image"
            src={screenShot}
            alt={`${appTitle} screen shot`}
        />
        <img className="laptop" src={LAPTOP} alt="Laptop" />
    </div>;

export default ScreenShot;
