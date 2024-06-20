import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style/App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Cart from "./pages/main/cart/Cart";
import LoginModal from "./components/ui/modals/LoginModal";
import Home from "./pages/main/home/Home";
import ProductPage from "./pages/main/product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
