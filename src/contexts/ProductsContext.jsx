// React
import { createContext, useEffect, useState } from "react";

// Utils
import { get } from "../utils/http";

// Creando Contexto
// Primer paso - Creación del Contexto
const ProductsContext = createContext();

// Segundo paso - Armado del Provider
const url = import.meta.env.VITE_ENDPOINT_PRODUCTS;

const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProducts()
  }, [])

  // ! GET ALL -- Obtener todos los productos 
  const getProducts = async () => {
    try {
      const products = await get(url);
      setProducts(products);
    } catch (error) {
      console.log("getProducts function - not working", error);
    }
  };

  const data = {products};
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

// Tercer paso - Exportaciones
export { ProductsProvider };

export default ProductsContext;
