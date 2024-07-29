import React, { useState } from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

const StyledApp = styled.div`
  height: 100vh;
  /* grid container settings */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'header'
        'main';
`;


function App() {
  const [section, setSection] = useState('home');

  return (
    <StyledApp>
      <Header section={section} setSection={setSection} />
      <Main section={section} />
      
    </StyledApp>
  );
}

export default App;