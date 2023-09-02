import React from "react";
import styled from "styled-components";
import TechStack from "./TecnologyBox";
import { Element, Link } from "react-scroll";
import Techstack from "./TecnologyBox";

const AboutContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 100vh;
`;

const InfoSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

const SkillsSection = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <Element name="about">
      <AboutContainer>
        <InfoSection>
          <Title>About Me</Title>
          <p>
            I'm a full-stack developer with a preference for the front end,
            although I also have experience in the back end.
            <br />
            <br />
            I have developed personal projects to improve my skills and prepare
            for the professional world.
            <br />
            <br />
            My goal is to create complete websites with an appealing design that
            offers an excellent user experience. I am looking for job
            opportunities where I can contribute, learn, and grow.
            <br />
            <br />
            You can check out my projects in the Projects section.
            <br />
            <br />
            Feel free to contact me.
          </p>
        </InfoSection>
        <SkillsSection>
          <Title>Skills</Title>
          <Techstack />
        </SkillsSection>
      </AboutContainer>
    </Element>
  );
};

export default About;
