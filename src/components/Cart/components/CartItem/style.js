import styled from "styled-components";
import theme from "../../../../utils/theme";

export const ItemBody = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  background-color: ${theme.colors.primaryGreen};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ItemName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  font-weight: 700;
`;
export const ItemDetailWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ItemPrice = styled.p``;

export const ItemQuantity = styled.p``;

export const ItemSubTotal = styled.p``;

export const DeleteProduct = styled.button`
  position: absolute;
  right: 6px;
  top: 6px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: ${theme.colors.primaryRed};
  cursor: pointer;
`;

export const DeleteProductIcon = styled.img`
  width: 12px;
  height: 12px;
`;
