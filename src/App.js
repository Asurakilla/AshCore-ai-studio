// src/App.js
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default App;