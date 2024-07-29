import React from 'react';
import Styled from 'styled-components';
import "../index.css";

const StyledFooter = Styled.footer`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 2 / 1 / 3 / 4;
    background-color: #022b3a;
    padding: var(--header-footer-spacing);
    /* we dont want the footer to be displayed on mobile */
    display: none;
    /* we want the footer to be displayed on desktop */
    @media (min-width: 768px) {
        display: block;
    }
    
`;


const Footer = () => {
    return (
        <StyledFooter>
            <p>Links: </p>
        </StyledFooter>
    );
}

export default Footer;