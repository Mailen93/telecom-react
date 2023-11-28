// React
import React from "react";

// Components
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsContainer title="Productos Destacados" />
    </>
  );
};

export default Home;
