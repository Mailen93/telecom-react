// React
import React from "react";

// Styles
import * as Styled from "./style";
import AboutHero from "./components/AboutHero/AboutHero";
import JoinUs from "./components/JoinUs/JoinUs";

const AboutUs = () => {
  return (
    <Styled.AboutUsBody>
      <AboutHero />
      <JoinUs />
    </Styled.AboutUsBody>
  );
};

export default AboutUs;
