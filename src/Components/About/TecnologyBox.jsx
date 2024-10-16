import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaDatabase,
  FaJs,
  FaNode,
  FaGithub,
  FaLess,
} from "react-icons/fa";
import {
  SiStyledcomponents,
  SiTypescript,
  SiVite,
  SiAdobeillustrator,
  SiPython,
  SiAwsamplify,
  SiTailwindcss,
  SiNextdotjs,
  SiNginx,
  SiDocker,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandRedux } from "react-icons/tb";

const TechstackContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 300px;
    flex-wrap: wrap;
  }
`;

const TechIcon = styled.div`
  font-size: 45px;
  margin: 0 10px;
`;

const Techstack = () => {
  return (
    <TechstackContainer>
      <TechRow>
        <TechIcon>
          <FaReact />
        </TechIcon>
        <TechIcon>
          <SiTypescript />
        </TechIcon>
        <TechIcon>
          <FaCss3 />
        </TechIcon>
        <TechIcon>
          <FaHtml5 />
        </TechIcon>
        <TechIcon>
          <FaLess />
        </TechIcon>
        <TechIcon>
          <FaDatabase />
        </TechIcon>
        <TechIcon>
          <FaJs />
        </TechIcon>
        <TechIcon>
          <FaNode />
        </TechIcon>
        <TechIcon>
          <FaGithub />
        </TechIcon>
        <TechIcon>
          <SiStyledcomponents />
        </TechIcon>
        <TechIcon>
          <TbBrandCSharp />
        </TechIcon>
        <TechIcon>
          <TbBrandRedux />
        </TechIcon>
        <TechIcon>
          <SiVite />
        </TechIcon>
        <TechIcon>
          <SiAdobeillustrator />
        </TechIcon>
        <TechIcon>
          <SiPython />
        </TechIcon>
        <TechIcon>
          <SiAwsamplify />
        </TechIcon>
        <TechIcon>
          <SiTailwindcss />
        </TechIcon>
        <TechIcon>
          <SiNextdotjs />
        </TechIcon>
        <TechIcon>
          <SiNginx />
        </TechIcon>
        <TechIcon>
          <SiDocker />
        </TechIcon>
      </TechRow>
    </TechstackContainer>
  );
};

export default Techstack;
