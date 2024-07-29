import React from 'react';
import styled from 'styled-components';
import { StyledSection } from './global_styles/StyledSections';
import "../index.css";

const StyledHi = styled.h1`
    color: #80ed99;
    margin: 0;
    whitespace: nowrap;
    font-size: calc(1vw + 5rem);
`;

const StyledTagline = styled.h2`
    color: #80ed99;
    margin: 0;
    whitespace: nowrap;
    font-size: calc(1vw + 2rem);
`;

const StyledWelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* This will allow items to wrap to the next line if necessary */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically on small screens */
        text-align: center; /* Center-align text */
    }
`;

const StyledWelcomeTextContainer = styled.div`
    flex: 1;
    padding: 10px; /* Add padding for spacing */
`;

const StyledProfileImage = styled.img`
    width: 200px;
    border-radius: 50%;
    margin-left: 20px;
    @media (max-width: 768px) {
        margin: 20px 0 0 0; /* Remove left margin and add top margin for spacing */
        width: 170px; /* Optionally reduce size on smaller screens */
    }
`;

const Home = () => {
    return (
        <StyledSection>
            <StyledWelcomeContainer>
                <StyledWelcomeTextContainer>
                    <StyledHi>Hello!</StyledHi>
                    <StyledTagline>I develop Software</StyledTagline>
                    <p>I'm Daniel, a Computer Science graduate from the University of Southampton, about to return as a Software Engineer at Bloomberg!</p>
                </StyledWelcomeTextContainer>
                <StyledProfileImage src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Daniel's profile" />
            </StyledWelcomeContainer>

            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </StyledSection>
    );
}

export default Home;
