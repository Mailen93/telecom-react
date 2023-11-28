import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`;

export const HeroBanner = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`;

export const HeroBannerOpacity = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(2px);
  background-color: rgb(0, 0, 0, 0.5);
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 72px;
  color: white;
  position: absolute;
  gap: 40px;
  letter-spacing: 10px;
  padding: 40px 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const HeroTitleTop = styled.h2``;
export const HeroTitleMid = styled.h2`
  margin-left: 80px;
`;
export const HeroTitleBot = styled.h2`
  margin-left: 160px;
`;
