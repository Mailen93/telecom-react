// React
import React from "react";

// Styles
import * as Styled from "./style";

// Utils
import { buttons } from "../../utils/constants";

// Assets
import { UserGreen } from "../../assets/icons";

const ProductCard = ({ image, title, players, playersAge, detail, price }) => {
  return (
    <Styled.CardBody>
      <Styled.CardImageWrapper>
        <Styled.CardImage src={image} alt={image} />
      </Styled.CardImageWrapper>

      <Styled.CardTitle>{title}</Styled.CardTitle>
      <Styled.Divider />
      <Styled.CardDetailWrapper>
        <Styled.PlayersDetail>
          <Styled.PlayerIcon src={UserGreen} alt="user-icon" />
          <Styled.Players>
            {players}
            <Styled.PlayersAge>+{playersAge}</Styled.PlayersAge>
          </Styled.Players>
        </Styled.PlayersDetail>
        <Styled.Detail>{detail}</Styled.Detail>
        <Styled.Price>AR$ {price}</Styled.Price>
        <Styled.ButtonsWrapper>
          {buttons.map((button) => (
            <Styled.Button $type={button.id} key={button.id}>
              {button.label}
            </Styled.Button>
          ))}
        </Styled.ButtonsWrapper>
      </Styled.CardDetailWrapper>
    </Styled.CardBody>
  );
};

export default ProductCard;
