// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import UploadProducts from "./pages/UploadProducts/UploadProducts";

// Contexts
import { ProductsProvider } from "./contexts/ProductsContext";

// Components
import Cart from "./components/Cart";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alta" element={<UploadProducts />} />
        </Routes>
      </BrowserRouter>
      <Cart />
    </ProductsProvider>
  );
}

export default App;
