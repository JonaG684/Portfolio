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
  padding: 1rem;
`;

const SkillsSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <Element name="about">
      <AboutContainer>
        <InfoSection>
          <Title>About Me</Title>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
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
