import styled from "styled-components";
import theme from "../../../../utils/theme";

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  width: 40%;
  border-radius: 10px;
  box-shadow: 23px 28px 61px -23px rgba(0, 0, 0, 0.97);
  -webkit-box-shadow: 23px 28px 61px -23px rgba(0, 0, 0, 0.97);
  -moz-box-shadow: 23px 28px 61px -23px rgba(0, 0, 0, 0.97);
  gap: 10px;
  height: 560px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primaryRed};
    border-radius: 5px;
  }
`;
