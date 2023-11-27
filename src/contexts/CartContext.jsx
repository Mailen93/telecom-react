// CREANDO CONTEXTO
import { createContext } from "react";
import { useLocaleStorage } from "../Hooks/useLocalStorage";

// 1er paso -> Creación de Contexto
const CartContext = createContext();

// 2do paso -> Armado del Provider
const CartProvider = ({ children }) => {
  const [ cart, setCart] = useLocaleStorage('cart', []);

  const gameAlreadyInCart = (game) => {
    return cart.filter((item) => item.id === game.id).length;
  };

  const addToCartContext = (game) => {
    if (!gameAlreadyInCart(game)) {
      game.quantity = 1;
      setCart((prevCart) => {
        const newCart = [...prevCart, game];
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        return newCart;
      });
    } else {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        window.localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  };

  const deleteProductCartContext = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      window.localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const saveCartContext = () => {

  };

  const data = { addToCartContext, deleteProductCartContext, saveCartContext, cart, deleteProductCartContext };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

// 3er paso -> Exportaciones
export { CartProvider };
export default CartContext;
