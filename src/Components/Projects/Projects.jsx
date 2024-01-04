import React from "react";
import styled from "styled-components";
import projectsData from "./ProjectData";
import { Element } from "react-scroll";

const ProjectsContainer = styled.div`
  margin-bottom: 2rem;
`;

const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 768px){
    display:flow;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.1rem;
`;

const LaptopImage = styled.img`
  max-width: 50%;
  height: auto;
  @media (max-width: 768px){
    max-width: 90%;
  }
`;

const DescriptionContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "Jetsbrains Mono",monospace;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  font-family: "Arcadia Code", monospace;
  margin-right: 4rem;
  
  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8rem; 
  }
`;

const Projects = () => {
  return (
    <Element name="projects">
      <ProjectsContainer>
        <Title>Projects</Title>
        {projectsData.map((project, index) => (
          <ProjectCardContainer key={index}>
            <LaptopImage src={project.imageUrl} alt={`${project.title} Laptop`} />
            <DescriptionContainer>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </DescriptionContainer>
          </ProjectCardContainer>
        ))}
      </ProjectsContainer>
    </Element>
  );
};

export default Projects;

