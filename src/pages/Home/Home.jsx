// React
import React, { useEffect } from "react";

// Components
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Hero from "./components/Hero/Hero";

const Home = () => {
  useEffect(() => {
    document.title = "En un cumple! - Home";
  }, []);
  return (
    <>
      <Hero />
      <ProductsContainer title="Productos Destacados" />
    </>
  );
};

export default Home;
