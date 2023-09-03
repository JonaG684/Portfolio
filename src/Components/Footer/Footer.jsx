import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  aling-items: center;
  color: #fff;
  margin: 0;
`;

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
    <FooterContainer>
      <FooterText>© {year} - All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
