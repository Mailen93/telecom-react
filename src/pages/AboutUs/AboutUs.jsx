// React
import React, { useEffect } from "react";

// Styles
import * as Styled from "./style";
import AboutHero from "./components/AboutHero/AboutHero";
import JoinUs from "./components/JoinUs/JoinUs";

const AboutUs = () => {
  useEffect(() => {
    document.title = "En un cumple! - Nosotros";
  }, []);

  return (
    <Styled.AboutUsBody>
      <AboutHero />
      <JoinUs />
    </Styled.AboutUsBody>
  );
};

export default AboutUs;
