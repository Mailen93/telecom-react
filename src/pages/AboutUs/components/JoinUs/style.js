import styled from "styled-components";
import theme from "../../../../utils/theme";

export const JoinsUsSection = styled.section`
  height: calc(100vh - 100px);
  padding: 40px;
  border-radius: 40px;
  background-color: ${theme.colors.primaryGreen};
  margin-top: 20px;
  display: flex;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  text-align: center;
`;

export const JoinUsTitle = styled.h2`
  font-family: "Mulish", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
`;

export const JoinUsSubtitle = styled.h3`
  font-family: "Mulish", sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 45px;
  margin-bottom: 40px;
`;

export const ValuesContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
`;
