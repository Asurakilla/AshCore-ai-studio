import React, { useEffect } from "react";
import styled from "styled-components";
import { glass, pulse } from "../styles/mixins";
import particlesJS from "particles.js";
import { initThreeScene } from "../utils/threeScene";

const HeroSection = () => {
  useEffect(() => {
    particlesJS("particles-js", require("../utils/particlesConfig"));
    initThreeScene("three-container");
  }, []);

  return (
    <HeroContainer>
      <Content>
        <Title>EVOLVE YOUR SOUND</Title>
        <Subtitle>AI-Powered Music Creation Platform</Subtitle>
        <ButtonGroup>
          <EnterButton>Enter AI Lab</EnterButton>
          <TryButton>Try Hologram DAW</TryButton>
        </ButtonGroup>
      </Content>
      <NeuralVisual>
        {/* Имитация нейросети */}
        <Node></Node>
        <Node delay="1s"></Node>
        <Node delay="2s"></Node>
      </NeuralVisual>
      <div id="particles-js"></div>
      <div id="three-container"></div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  #particles-js, #three-container {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -1;
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 2;
  ${glass}
  padding: 3rem 4rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  background: linear-gradient(90deg, #00f7ff, #ff00e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0e0;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const EnterButton = styled.button`
  background: linear-gradient(90deg, #00f7ff, #9600ff);
  color: #0a0f1e;
  padding: 0.8rem 2rem;
  border-radius: 24px;
  font-weight: 600;
  ${pulse('#00f7ff')}
`;

const TryButton = styled.button`
  background: transparent;
  color: #00f7ff;
  border: 1px solid #00f7ff;
  padding: 0.8rem 2rem;
  border-radius: 24px;
  ${pulse('#00f7ff')}
`;

const NeuralVisual = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Node = styled.div`
  width: 12px;
  height: 12px;
  background: #00f7ff;
  border-radius: 50%;
  box-shadow: 0 0 10px #00f7ff;
  animation: pulse 1.5s infinite alternate;
  animation-delay: ${props => props.delay || "0"};
`;

export default HeroSection;