// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import UploadProducts from "./pages/UploadProducts/UploadProducts";

// Contexts
import { ProductsProvider } from "./contexts/ProductsContext";

// Components
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alta" element={<UploadProducts />} />
          </Routes>
        </BrowserRouter>
        <Cart />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
