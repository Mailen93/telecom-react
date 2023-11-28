// React
import React from "react";

// Styles
import * as Styled from "./style";
import { summaryItems } from "../../../../utils/constants";

// Utils

const Summary = ({ cart }) => {
  const calculateSummaryTotals = (id) => {
    switch (id) {
      case "products":
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
          </Styled.SummaryItemTotal>
        );
      case "shipping":
        return <Styled.SummaryItemTotal>Gratis</Styled.SummaryItemTotal>;
      case "taxes":
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart
              .reduce((acc, item) => acc + item.quantity * item.price * 0.21, 0)
              .toFixed(2)}
          </Styled.SummaryItemTotal>
        );
      default:
        return (
          <Styled.SummaryItemTotal>
            AR${" "}
            {cart
              .reduce((acc, item) => acc + item.quantity * item.price * 1.21, 0)
              .toFixed(2)}
          </Styled.SummaryItemTotal>
        );
    }
  };
  return (
    <Styled.Summary>
      <Styled.SummaryTitle>Resumen Carrito:</Styled.SummaryTitle>
      <Styled.SumaryDetailContainer>
        {summaryItems.map((item) => (
          <Styled.SummaryItemLabel key={item.id}>
            {item.label}
            {calculateSummaryTotals(item.id)}
          </Styled.SummaryItemLabel>
        ))}
      </Styled.SumaryDetailContainer>
    </Styled.Summary>
  );
};

export default Summary;
