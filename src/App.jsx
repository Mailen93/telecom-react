// React Router
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import UploadProducts from "./pages/UploadProducts/UploadProducts";
import Checkout from "./pages/Checkout";

// Contexts
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

// Components
import Cart from "./components/Cart";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  

  return (
    <ProductsProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<UploadProducts />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {location.pathname !== '/checkout' && <Cart />}
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
