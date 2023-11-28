// React
import React from "react";

// Styles
import * as Styled from "./style";
import AboutHero from "./components/AboutHero/AboutHero";

const AboutUs = () => {
  return (
    <Styled.AboutUsBody>
      <AboutHero />
    </Styled.AboutUsBody>
  );
};

export default AboutUs;
