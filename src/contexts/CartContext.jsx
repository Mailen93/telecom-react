/* CREANDO CONTEXTO */

import { createContext } from "react";
import { useLocaleStorage } from "../Hooks/useLocalStorage";

// ! 1er paso -> Creación de Contexto
const CartContext = createContext();

// ! 2do paso -> Armado del Provider
const url = import.meta.env.VITE_ENDPOINT_CART;

const CartProvider = ({ children }) => {
//   const [addToCart, cart] = useLocaleStorage("cart", []);

  const productAlreadyInCart = (product) => {
    return cart.filter((prod) => prod.id === product.id).length; // Devuelve 0 si no hay productos y 1 si hay
  };

  const getCartProduct = () => {
    return cart.find((prod) => prod.id === product.id); // Me retorna si hay un producto en el carrito
  };

  const addToCartContext = (product) => {
    if (!productAlreadyInCart(product)) {
      product.quantity = 1;
      addToCart(product);
    } else {
      const productFromCart = getCartProduct(product);
      productFromCart.cantidad++;
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const deleteProduct = (id) => {};
  const saveCartContext = () => {};
  const data = { addToCartContext, deleteProduct, saveCartContext };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

// ! 3er paso -> Exportaciones
export { CartProvider };
export default CartContext;
