import "./Banner.css"
import React from 'react';
import { FormattedMessage } from 'react-intl';

function Banner() {
    return (
        <div className="Banner">
            <h1><FormattedMessage id="Title"/></h1>
            <hr/>
            <img src="assets/banner.jpg" alt="Banner Café"/>
            <hr/>
        </div>
    );
}

export default Banner;