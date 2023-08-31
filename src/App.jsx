import "./App.css";
import React from "react";
import styled from "styled-components";
import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <PageContainer>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </PageContainer>
  );
};

export default App;