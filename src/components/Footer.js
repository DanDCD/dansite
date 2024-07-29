import React from 'react';
import Styled from 'styled-components';
import "../index.css";

const StyledFooter = Styled.footer`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 2 / 1 / 3 / 4;
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