import React from "react";
import styled from "styled-components";
import { neonBorder } from "../styles/mixins";

const Footer = () => {
  return (
    <FooterContainer>
      <TopBorder />
      <FooterContent>
        <h2>AshCore Galaxy</h2>
        <ThreeMap id="three-footer-map" />
        <Legend>
          <Item color="#00f7ff">Creation Tools</Item>
          <Item color="#ff00e5">AI Systems</Item>
          <Item color="#9600ff">Community</Item>
        </Legend>
        <Links>
          <a href="/dashboard">Dashboard</a>
          <a href="/ai-lab">AI Lab</a>
          <a href="/distribution">Distribution</a>
          <a href="/community">Community</a>
        </Links>
        <Copyright>© 2025 AshCore. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: 5rem;
  position: relative;
`;

const TopBorder = styled.div`
  height: 1px;
  background: linear-gradient(90deg, #00f7ff, #ff00e5, #9600ff);
  margin-bottom: 2rem;
`;

const FooterContent = styled.div`
  padding: 3rem 10%;
  text-align: center;
  color: #b0b0e0;
`;

const ThreeMap = styled.div`
  width: 300px;
  height: 300px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;

const Item = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: ${props => props.color};
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
  a { color: #e0e0ff; }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
`;

export default Footer;