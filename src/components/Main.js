import React from 'react';
import styled from 'styled-components';
import "../index.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const StyledMain = styled.main`
    /* grid container settings */
    display: grid;

    /* (this is the nested grid inside app) */
    grid-template-rows: 1fr;
    grid-template-columns: 1fr minmax(0, 600px) 1fr;

    /* grid element settings */
    grid-area: main;
    overflow: auto;
    padding: var(--main-spacing);
`;

const Main = ({ section }) => {
    return (// Display the section based on the section state
        <StyledMain>
            {section === 'home' && <Home />}
            {section === 'about' && <About />}
            {section === 'contact' && <Contact />}
        </StyledMain>
    );
}

export default Main;