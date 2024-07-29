import React from 'react';
import Styled from 'styled-components';
import "../index.css";

const StyledFooter = Styled.footer`
    /* grid element settings */
    grid-area: footer;
    background-color: #313B72;
    padding: var(--header-footer-spacing);
    `;


const Footer = () => {
    return (
        <StyledFooter>
            <p>Links: </p>
        </StyledFooter>
    );
}

export default Footer;