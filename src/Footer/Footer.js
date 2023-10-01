import "./Footer.css"
import React from 'react';
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (
        <p className="Footer">
            <FormattedMessage id="ContactUs"/>: 
            +57 3102105253 - info@elaromamagico.com - @elaromamagico
        </p>
    );
}

export default Footer;