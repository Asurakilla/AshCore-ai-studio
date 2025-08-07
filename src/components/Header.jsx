import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { glass, neonBorder } from "../styles/mixins";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HolographicHeader>
      <Logo>
        Ash<span>Core</span>
        <PulseDot />
      </Logo>

      <Nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/ai-lab">AI Lab</NavLink>
        <NavLink to="/neuro-lyrics">Neuro-Lyrics</NavLink>
        <NavLink to="/quantum-beats">Quantum Beats</NavLink>
        <NavLink to="/hologram-daw">Hologram DAW</NavLink>
      </Nav>

      <RightActions>
        <ThemeToggle>🌓</ThemeToggle>
        <VoiceAssistant>🔊</VoiceAssistant>
        <SignInButton>Sign In</SignInButton>
      </RightActions>

      <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>

      {menuOpen && <MobileMenu>...</MobileMenu>}
    </HolographicHeader>
  );
};

const HolographicHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  z-index: 1000;
  ${glass}
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #00f7ff;
  position: relative;

  span {
    color: #ff00e5;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00f7ff, #ff00e5);
    transition: width 0.3s ease;
  }
`;

const PulseDot = styled.div`
  position: absolute;
  right: -12px;
  top: 5px;
  width: 8px;
  height: 8px;
  background: #9600ff;
  border-radius: 50%;
  ${props => props.theme.pulse('#9600ff')}
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #e0e0ff;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #00f7ff;
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: #00f7ff;
    transition: width 0.3s;
  }
`;

const RightActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ThemeToggle = styled.button`
  background: none;
  font-size: 1.2rem;
`;

const VoiceAssistant = styled.button`
  background: rgba(0, 247, 255, 0.1);
  border: 1px solid #00f7ff;
  color: #00f7ff;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  ${props => props.theme.pulse('#00f7ff')}
`;

const SignInButton = styled.button`
  background: linear-gradient(90deg, #00f7ff, #9600ff);
  color: #0a0f1e;
  padding: 0.6rem 1.4rem;
  border-radius: 24px;
  font-weight: 600;
  ${neonBorder('#00f7ff')}
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    width: 25px;
    height: 3px;
    background: #e0e0ff;
    margin: 3px 0;
    border-radius: 3px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  ${glass}
  padding: 1rem;
`;

export default Header;