import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavLinkItem = styled.li``;

const SmoothScrollLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
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
        <NavLinkItem>
          <SmoothScrollLink to="contact" smooth={true} duration={350}>
            Contact
          </SmoothScrollLink>
        </NavLinkItem>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
