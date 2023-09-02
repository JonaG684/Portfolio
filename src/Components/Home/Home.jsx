import React from "react";
import styled from "styled-components";
import { Element, Link } from "react-scroll";
import Floating from "../Link/Floating";

const HomeContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Jetsbrains Mono", monospace;
  align-items: center;
  margin-bottom: 0,5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  align-items: center;
`;

const MouseElement = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  animation: scrollAnimation 1.5s infinite;

  @keyframes scrollAnimation {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(10px);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }
`;

const ScrollText = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const ScrollIcon = styled.div`
  width: 20px;
  height: 30px;
  border: 2px solid white;
  border-radius: 20px;
  margin-bottom: 5px;
`;

const CVLink = styled.a`
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
 // src\assets\JONATHAN ADRIEL GARCIA AVILEZ CV EN.pdf
const Home = () => {
  return (
    <HomeContainer id="home">
      <Floating />
      <Heading>HEY, I'M JONATHAN GARCIA</Heading>
      <Subtitle>
      Full Stack Developer - front-end and graphic design enthusiast.
      </Subtitle>
      <CVLink href="../../src/assets/JONATHAN ADRIEL GARCIA AVILEZ CV EN.pdf" download>Download CV</CVLink>
      <Element name="about" />
      <MouseElement>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon />
      </MouseElement>
    </HomeContainer>
  );
};

export default Home;
