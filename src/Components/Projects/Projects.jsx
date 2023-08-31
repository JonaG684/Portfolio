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
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const LaptopImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const DescriptionContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
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

