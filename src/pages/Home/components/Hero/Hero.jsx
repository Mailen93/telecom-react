// React
import React from "react";

// Styles
import * as Styled from "./style";

// Assets
import Banner from "../../../../assets/Banner.jpg";

const Hero = () => {
  return (
    <Styled.HeroContainer>
      <Styled.HeroBanner src={Banner} />
      <Styled.HeroBannerOpacity />
      <Styled.HeroTitleWrapper>
        <Styled.HeroTitleTop>EN</Styled.HeroTitleTop>
        <Styled.HeroTitleMid>UN</Styled.HeroTitleMid>
        <Styled.HeroTitleBot>CUMPLE</Styled.HeroTitleBot>
      </Styled.HeroTitleWrapper>
    </Styled.HeroContainer>
  );
};

export default Hero;
