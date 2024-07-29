import Styled from 'styled-components';

const StyledSection = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 2 / 1 / 3;
    padding: 1rem;
`;

const StyledSectionFull = Styled.section`
    /* grid element settings */
    /* start row / start column / end row / end column */
    grid-area: 1 / 1 / 1 / 4;
    padding: 1rem;
`;

export { StyledSection, StyledSectionFull };