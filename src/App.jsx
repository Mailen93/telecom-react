// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import UploadProducts from "./pages/UploadProducts/UploadProducts";
import Checkout from "./pages/Checkout";

// Contexts
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

// Components
import Cart from "./components/Cart";

const location = window.location.pathname;
const isCheckoutPage = location === "/checkout";

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<UploadProducts />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          {!isCheckoutPage && <Cart />}
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
