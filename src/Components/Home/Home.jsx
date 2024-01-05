import React from "react";
import styled from "styled-components";
import { Element, Link } from "react-scroll";
import Floating from "../Link/Floating";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Jetsbrains Mono", italic;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  align-items: center;
  font-family: "Jetsbrains Mono", monospace;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MouseElement = styled.div`
  position: absolute;
  bottom: 1rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollText = styled.p`
  margin: 0;
  font-size: 0.8rem;
  font-family: "Jetsbrains Mono", monospace;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ScrollIcon = styled.div`
  width: 20px;
  height: 30px;
  border: 2px solid white;
  border-radius: 20px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 16px;
    height: 24px;
  }
`;

const CVLink = styled.a`
  background-color: lightcoral;
  font-family: "Jetsbrains Mono", monospace;
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5abb0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <Floating />
      <Heading>HEY, I'M JONATHAN GARCIA</Heading>
      <Subtitle>
        Full Stack Developer - front-end and graphic design enthusiast.
      </Subtitle>
      <CVLink
        href="../../../public/cv.pdf"
        download
      >
        Download CV
      </CVLink>
      <Element name="about" />
      <MouseElement>
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon />
      </MouseElement>
    </HomeContainer>
  );
};

export default Home;
