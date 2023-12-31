import styled from "styled-components";
import theme from "../../../../utils/theme";

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 40px;
  position: relative;
  height: fit-content;
  width: 400px;
`;

export const SummaryTitle = styled.p`
  width: 100%;
  font-size: 32px;
  font-weight: 600;
  background-color: ${theme.colors.primaryOrange};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px 10px 0 0;
  padding: 10px;
  color: white;
`;
export const SumaryDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0;
  gap: 10px;

  & > p:last-of-type {
    border-top: 1px solid gray;
    padding-top: 20px;
  }
`;

export const SummaryItemLabel = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const SummaryItemTotal = styled.span`
  font-weight: 600;
`;

export const PayButton = styled.button`
  margin-top: 40px;
  border: none;
  background-color: ${theme.colors.primaryGreen};
  color: white;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 24px;
`;
