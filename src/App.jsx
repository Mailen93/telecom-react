// React Router
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import UploadProducts from "./pages/UploadProducts/UploadProducts";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs/AboutUs";

// Contexts
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

// Components
import Cart from "./components/Cart";

function App() {
  const location = useLocation();

  return (
    <ProductsProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<UploadProducts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
        {location.pathname !== "/checkout" && <Cart />}
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
