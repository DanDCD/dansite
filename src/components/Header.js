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
`;

const StyledNav = Styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = Styled.button`
    padding: 5px 10px;
    margin: 5px;
`;

const Header = ({ section, setSection }) => {
    return (
        <StyledHeader>
            <h1>Daniel Drew</h1>
            <StyledNav>
                <StyledButton onClick={() => setSection('home')}>Home</StyledButton>
                <StyledButton onClick={() => setSection('about')}>About</StyledButton>
                <StyledButton onClick={() => setSection('contact')}>Contact</StyledButton>
            </StyledNav>
        </StyledHeader>
    );
}

export default Header;