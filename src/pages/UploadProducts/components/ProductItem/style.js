import styled from "styled-components";
import theme from "../../../../utils/theme";

export const ProductItemBody = styled.div`
  padding: 15px;
  background-color: ${theme.colors.primaryGreen};
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  & > div:first-of-type {
    border-left: none;
  }
  flex-direction: column;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  border: 1px solid white;
`;

export const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  border-left: 1px solid white;
  padding: 0 10px;
`;

export const ProductDetailLabel = styled.label`
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 auto;
  border-bottom: 1px solid white;
`;
export const ProductDetail = styled.p`
  text-align: start;
  color: white;
  font-weight: 500;
  max-height: 100px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0 auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 4px;
  background-color: ${({ $type }) =>
    $type === "delete" ? theme.colors.primaryRed : theme.colors.primaryOrange};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
