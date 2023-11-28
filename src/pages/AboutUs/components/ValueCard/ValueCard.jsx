// React
import React from "react";

// Styles
import * as Styled from "./style";

const ValueCard = ({ value }) => {
  return (
    <Styled.CardBody>
      <Styled.CardTitle>{value.title}</Styled.CardTitle>
      <Styled.CardDetail>{value.description}</Styled.CardDetail>
    </Styled.CardBody>
  );
};

export default ValueCard;
