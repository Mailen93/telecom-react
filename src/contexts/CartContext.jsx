/* CREANDO CONTEXTO */
import { createContext } from "react";
import { useLocaleStorage } from "../Hooks/useLocalStorage";

// ! 1er paso -> Creación de Contexto
const CartContext = createContext();

// ! 2do paso -> Armado del Provider
const url = import.meta.env.VITE_ENDPOINT_CART;

const CartProvider = ({ children }) => {
  // State
  const [addToCart, cart] = useLocaleStorage('cart', [])

  const gameAlreadyInCart = (game) => {
    return cart.filter((item) => item.id === game.id).length;
  };
  const getCartProduct = (game) => {
    return cart.find((item) => item.id === game.id);
  };

  const addToCartContext = (game) => {
    if(!gameAlreadyInCart(game)){
      game.quantity = 1
      addToCart(game)
    } else {
      const productFromCart = getCartProduct(game)
      console.log('Game en carrito', productFromCart)
      productFromCart.quantity++
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }
  };
  const deleteProductCartContext = (id) => {};
  const saveCartContext = () => {};

  const data = { addToCartContext, deleteProductCartContext, saveCartContext };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

// ! 3er paso -> Exportaciones
export { CartProvider };
export default CartContext;
