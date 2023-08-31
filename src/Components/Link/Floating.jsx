import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 


const FloatingColumn = styled.div`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #007bff;
  }
`;


const Floating = () => {
    return (
        <FloatingColumn>
        <IconLink href="https://www.linkedin.com/in/jonathan-adriel-garcia-avilez-703812279/" target="_blank">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com/JonaG684" target="_blank">
          <FaGithub />
        </IconLink>
        <IconLink href="mailto:josueavilez54@gmail.com">
          <FaEnvelope />
        </IconLink>
      </FloatingColumn>
    );
};

export default Floating;