import styled from "styled-components";
import theme from "../../../../utils/theme";

export const CardBody = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 20px 12px;
  background-color: #f29727;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 7px 8px 0 black;
  transition: all ease-in-out 0.2s;
  &:hover {
    box-shadow: none;
  }
  color: white;
`;

export const CardTitle = styled.h4``;

export const CardDetail = styled.p`
  text-align: center;
`;
