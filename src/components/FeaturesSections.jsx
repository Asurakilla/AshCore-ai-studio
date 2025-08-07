import React from "react";
import styled from "styled-components";
import { glass } from "../styles/mixins";

const FeaturesSection = () => {
  return (
    <FeaturesContainer>
      <FeatureCard>
        <IconRing>
          <Ring></Ring>
          <Ring delay="0.2s"></Ring>
          <Ring delay="0.4s"></Ring>
        </IconRing>
        <h3>Quantum Audio Engine</h3>
        <p>Experience sound generation powered by quantum-inspired algorithms that create unprecedented sonic landscapes.</p>
      </FeatureCard>

      <FeatureCard>
        <DataGrid>
          {[...Array(9)].map((_, i) => <DataPath key={i}></DataPath>)}
        </DataGrid>
        <h3>Neural Composition</h3>
        <p>Train AI models on your unique style to generate music that evolves with your creative journey.</p>
      </FeatureCard>

      <FeatureCard>
        <Projector>
          <Beam></Beam>
          <PulseCircle></PulseCircle>
        </Projector>
        <h3>Holographic DAW</h3>
        <p>Produce music in a fully immersive 3D environment with intuitive gesture controls and spatial audio mixing.</p>
      </FeatureCard>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 5rem 10%;
  text-align: center;
`;

const FeatureCard = styled.div`
  ${glass}
  padding: 2rem;
  h3 { color: #00f7ff; }
  p { color: #b0b0e0; margin-top: 1rem; }
`;

const IconRing = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Ring = styled.div`
  width: 20px; height: 20px;
  border: 2px solid #00f7ff;
  border-radius: 50%;
  animation: pulse 2s infinite;
  animation-delay: ${props => props.delay};
`;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  width: 60px;
  margin: 0 auto;
`;

const DataPath = styled.div`
  width: 100%; height: 4px;
  background: #ff00e5;
  border-radius: 2px;
  opacity: 0.7;
`;

const Projector = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
`;

const Beam = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 30px; height: 30px;
  border: 2px solid #9600ff;
  border-radius: 50%;
  box-shadow: 0 0 15px #9600ff;
`;

const PulseCircle = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 40px; height: 40px;
  border: 1px solid #9600ff;
  border-radius: 50%;
  animation: pulse 2s infinite;
  opacity: 0.5;
`;

export default FeaturesSection;