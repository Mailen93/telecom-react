// React
import React from "react";

// Styles
import * as Styled from "./style";

// Assets
import { UsHero } from "../../../../assets/ProductsImages";

const AboutHero = () => {
  return (
    <Styled.AboutHeroSection>
      <Styled.AboutHeroTitle>
        Porque conservamos el amor por un buen juego de mesa
      </Styled.AboutHeroTitle>
      <Styled.AboutHeroBannerWrapper>
        <Styled.AboutHeroBanner src={UsHero} alt="hero-about" />
      </Styled.AboutHeroBannerWrapper>
    </Styled.AboutHeroSection>
  );
};

export default AboutHero;
