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
  font-size: 52px;
  width: 50%;
  text-align: center;
  margin-bottom: -150px;
  color: white;
  font-weight: 800;
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
