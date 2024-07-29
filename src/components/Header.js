import React from 'react';
import Styled from 'styled-components';
import "../index.css";


const StyledHeader = Styled.header`
    /* grid element settings */
    grid-area: header;
    background-color: #313B72;
    padding: var(--header-footer-spacing);

    /* flex container settings */
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
`;

const StyledNav = Styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledH1 = Styled.h1`
    color: white;
    whitespace: nowrap;
    /* flex item settings */
    flex-shrink: 1;
    font-size: calc(1vw + 1rem); /* Dynamically adjust font size based on viewport width */
`;

const StyledButton = Styled.button`
    padding: 5px 10px;
    margin: 5px;
    /* flex item settings */
    flex-shrink: 1;
    font-size: calc(1vw + 0.5rem); /* Dynamically adjust font size based on viewport width */

    /* Default styles for mobile */
    background-color: #F5FFFA;
    color: black;
    border: none;
    border-radius: 10%;
    

    /* Styles for desktop */
    @media (min-width: 768px) {
        background-color: transparent;
        color: #F5FFFA;
        border: none;
    }
`;



const Header = ({ section, setSection }) => {
    return (
        <StyledHeader>
            <StyledH1>Daniel Drew</StyledH1>
            <StyledNav>
                <StyledButton onClick={() => setSection('home')}>Home</StyledButton>
                <StyledButton onClick={() => setSection('about')}>About</StyledButton>
                <StyledButton onClick={() => setSection('contact')}>Contact</StyledButton>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;