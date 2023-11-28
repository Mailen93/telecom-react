// React
import { createContext, useEffect, useState } from "react";

// Utils
import { get, post } from "../utils/http";

// Creando Contexto
// Primer paso - Creación del Contexto
const ProductsContext = createContext();

// Segundo paso - Armado del Provider
const url = import.meta.env.VITE_ENDPOINT_PRODUCTS;

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  // ! GET ALL -- Obtener todos los productos -- R
  const getProducts = async () => {
    try {
      const products = await get(url);
      setProducts(products);
    } catch (error) {
      console.log("getProducts function - not working", error);
    }
  };

  // ! CREATE PRODUCT -- Crear un nuevo producto -- C
  const createProduct = async (newProduct) => {
    try {
      const createdProduct = await post(url, newProduct);
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
    } catch (error) {
      console.log("createProduct function - not working", error);
    }
  };

  const data = { products, createProduct };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

// Tercer paso - Exportaciones
export { ProductsProvider };

export default ProductsContext;
