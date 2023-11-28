// React
import React, { useCallback, useContext } from "react";

// Styles
import * as Styled from "./style";

// Utils
import { buttons } from "../../utils/constants";

// Assets
import { UserGreen } from "../../assets/icons";

// Contexts
import CartContext from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCartContext } = useContext(CartContext);

  const handleBuy = (product) => {
    console.log(
      "🚀 ~ file: ProductCard.jsx:19 ~ handleBuy ~ product:",
      product,
    );
    addToCartContext(product);
  };

  return (
    <Styled.CardBody>
      <Styled.CardImageWrapper>
        <Styled.CardImage src={product.image} alt={product.image} />
      </Styled.CardImageWrapper>
      <Styled.CardTitle>{product.name}</Styled.CardTitle>
      <Styled.Divider />
      <Styled.CardDetailWrapper>
        <Styled.PlayersDetail>
          <Styled.PlayerIcon src={UserGreen} alt="user-icon" />
          <Styled.Players>
            {product.players}
            <Styled.PlayersAge>{`( +${product.age} Años )`}</Styled.PlayersAge>
          </Styled.Players>
        </Styled.PlayersDetail>
        <Styled.Detail>{product.description}</Styled.Detail>
        <Styled.Price>AR$ {product.price}</Styled.Price>
        <Styled.ButtonsWrapper>
          {buttons.map((button) => (
            <Styled.Button
              $type={button.id}
              key={button.id}
              onClick={
                button.id === "comprar"
                  ? () => {
                      handleBuy(product);
                    }
                  : null
              }
            >
              {button.label}
            </Styled.Button>
          ))}
        </Styled.ButtonsWrapper>
      </Styled.CardDetailWrapper>
    </Styled.CardBody>
  );
};

export default ProductCard;
