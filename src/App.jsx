import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Product_det from "./pages/Product_det"
import Registor from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Card from "./pages/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product_det/:product_id" element={<Product_det />} />
        <Route path="/register" element={<Registor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/card" element={<Card />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;