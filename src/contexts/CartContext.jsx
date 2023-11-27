/* CREANDO CONTEXTO */

const { createContext } = require("react");

// ! 1er paso -> Creación de Contexto
const CartContext = createContext();

// ! 2do paso -> Armado del Provider
const url = import.meta.env.VITE_ENDPOINT_CART;

const CartProvider = ({ children }) => {
  const addToCart = (product) => {};
  const deleteProduct = (id) => {};
  const saveCartContext = () => {};
  const data = { addToCart, deleteProduct, saveCartContext };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

// ! 3er paso -> Exportaciones
export { CartProvider };
export default CartContext;
