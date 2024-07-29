import React, { useState } from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css";

const StyledApp = styled.div`
  height: 100vh;
  /* grid container settings */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        'header'
        'main'
        'footer';
`;


function App() {
  const [section, setSection] = useState('home');

  return (
    <StyledApp>
      <Header section={section} setSection={setSection} />
      <Main section={section} />
      <Footer />
    </StyledApp>
  );
}

export default App;