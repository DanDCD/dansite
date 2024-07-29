import React from 'react';
import Styled from 'styled-components';
import "../index.css";


const StyledHeader = Styled.header`
    /* grid element settings */
    grid-area: header;
    background-color: #022b3a;
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
    background-image: linear-gradient(120deg, #07beb8 0%, #c4fff9 100%);
    background-clip: text;
    color: transparent;
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
    background-color: white;
    color: black;

    border: none;
    border-radius: 10%;
    

    /* Styles for desktop */
    @media (min-width: 768px) {
        background-color: transparent;
        color: #c4fff9;
        border: none;
    }

    /* Styles for hover */
    &:hover {
        background-color: #c4fff9;
        color: black;
        cursor: pointer;
    }
`;



const Header = ({ section, setSection }) => {
    return (
        <StyledHeader>
            <StyledH1>Daniel Drew</StyledH1>
            <StyledNav>
                <StyledButton onClick={() => setSection('home')}>Home</StyledButton>
                <StyledButton onClick={() => setSection('experience')}>Experience</StyledButton>
                <StyledButton onClick={() => setSection('contact')}>Contact</StyledButton>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;