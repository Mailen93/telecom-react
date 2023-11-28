// React
import React, { useContext } from "react";

// Styles
import * as Styled from "./style";
import { summaryItems } from "../../../../utils/constants";
import Swal from "sweetalert2";
import theme from "../../../../utils/theme";
import { useNavigate } from "react-router";
import CartContext from "../../../../contexts/CartContext";

const handleFinishCheckout = (clearCart) => {
  Swal.fire({
    title: "Está seguro?",
    text: "Se debitará el pago de su tarjeta",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: theme.colors.primaryGreen,
    cancelButtonColor: theme.colors.primaryRed,
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si! Quiero mis juegos :)",
  })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Éxito",
          text: "GRACIAS POR SU COMPRA!",
          icon: "success",
        });
      }
    })
    .then(() => {
      setTimeout(() => {
        clearCart();
        useNavigate("/");
      }, 1000);
    });
};

const Summary = ({ cart }) => {
  const { clearCartContext } = useContext(CartContext);

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
      <Styled.PayButton
        onClick={() => {
          handleFinishCheckout(clearCartContext);
        }}
      >
        Finalizar Compra
      </Styled.PayButton>
    </Styled.Summary>
  );
};

export default Summary;
