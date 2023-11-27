// React
import React from "react";

// Styles
import * as Styled from "./style";

const CartItem = ({ game }) => {
  return (
    <Styled.ItemBody>
      <Styled.ItemName>{game.name}</Styled.ItemName>
      <Styled.ItemDetailWrapper>
        <Styled.ItemPrice>AR$ {game.price}  x</Styled.ItemPrice>
        <Styled.ItemQuantity>{game.quantity} =</Styled.ItemQuantity>
        <Styled.ItemSubTotal>AR$ {game.price * game.quantity}</Styled.ItemSubTotal>
      </Styled.ItemDetailWrapper>
    </Styled.ItemBody>
  );
};

export default CartItem;