import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import NavIcon from "../../assets/Icon.svg";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
`;

const NavLinks = styled.ul`
  list-style: none;
  font-family: Jetsbrains Mono, monospace;
  display: flex;
  color: white;
  justify-content: center;
  font-size: 1.2rem;
  gap: 15em;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    text-align: center;
    background-color: #333;
    z-index: 1;
  }
`;

const NavLinkItem = styled.li`
  margin: 1rem 0;
  color: white;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const SmoothScrollLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLogo = styled.img`
  max-width: 5rem;
  cursor: pointer;
  margin-right: 10rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo src={NavIcon} alt="Navbar Icon" />
      <NavLinks>
        <NavLinkItem>
          <SmoothScrollLink to="home" smooth={true} duration={350}>
            Home
          </SmoothScrollLink>
        </NavLinkItem>
        <NavLinkItem>
          <SmoothScrollLink to="about" smooth={true} duration={350}>
            About
          </SmoothScrollLink>
        </NavLinkItem>
        <NavLinkItem>
          <SmoothScrollLink to="projects" smooth={true} duration={350}>
            Projects
          </SmoothScrollLink>
        </NavLinkItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
