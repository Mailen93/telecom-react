import styled from "styled-components";
import theme from "../../../../utils/theme";

export const ProductItemBody = styled.div`
  padding: 15px;
  background-color: ${theme.colors.primaryGreen};
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  & > div:last-of-type {
    border: none;
  }
`;

export const ProductDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  border-right: 1px solid white;
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
