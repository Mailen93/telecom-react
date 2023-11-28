import styled from "styled-components";
import theme from "../../../../utils/theme";

export const AboutHeroSection = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: ${theme.colors.primaryOrange};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const AboutHeroTitle = styled.h2`
  width: 90%;
  max-width: 1000px;
  text-align: center;
  font-size: 58px;
  font-family: "Mulish", sans-serif;
  font-weight: 900;
  line-height: 80px;
  color: white;
  margin-bottom: -160px;
`;

export const AboutHeroBannerWrapper = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 200px;
`;

export const AboutHeroBanner = styled.img`
  object-fit: contain;
  width: 100%;
`;
