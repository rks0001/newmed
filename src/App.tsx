import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import ChangePassword from "./pages/ChangePassword";
import Prescription from "./pages/Prescription";
import CategoriesMain from "./pages/CategoriesMain";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesMain />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/prescription" element={<Prescription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
