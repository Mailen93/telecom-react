import styled from "styled-components";
import theme from "../../utils/theme";

export const CartIconWrapper = styled.div`
  position: fixed;
  top: 37px;
  right: 23px;
`;

export const CartIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const CartBody = styled.div`
  width: 300px;
  background-color: white;
  height: 300px;
  position: fixed;
  top: 110px;
  right: 10px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
  box-shadow: 21px 20px 64px 2px rgba(0, 0, 0, 0.78);
`;
export const CartTitle = styled.h3`
  font-size: 32px;
  color: ${theme.colors.primaryGreen};
  margin-top: 10px;
`;

export const CloseIconWrapper = styled.div`
  padding: 4px;
  border-radius: 4px;
  background-color: ${theme.colors.primaryRed};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;
`;
