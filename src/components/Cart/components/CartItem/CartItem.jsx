// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";

// Assets
import {Close} from '../../../../assets/icons'
import CartContext from "../../../../contexts/CartContext";

const CartItem = ({ game }) => {
  const {deleteProductCartContext} = useContext(CartContext)

  const handleDeleteItem = (id) => {
    console.log('Estoy eliminando este producto!', game);
    deleteProductCartContext(id)
  }
  return (
    <Styled.ItemBody>
      <Styled.DeleteProduct onClick={() => handleDeleteItem(game.id)}>
        <Styled.DeleteProductIcon src={Close} />
      </Styled.DeleteProduct>
      <Styled.ItemName>{game.name}</Styled.ItemName>
      <Styled.ItemDetailWrapper>
        <Styled.ItemPrice>AR$ {game.price}</Styled.ItemPrice>
        <Styled.ItemQuantity>x {game.quantity}</Styled.ItemQuantity>
        <Styled.ItemSubTotal>
          = AR$ {game.price * game.quantity}
        </Styled.ItemSubTotal>
      </Styled.ItemDetailWrapper>
    </Styled.ItemBody>
  );
};

export default CartItem;
