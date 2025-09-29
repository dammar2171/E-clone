import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./store/Store.jsx";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import Shop from "./Pages/Shop.jsx";
import Services from "./Pages/Services.jsx";
import Checkout from "./Pages/Checkout.jsx";
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about-Us" element={<AboutUs />} />
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/our-Team" element={<OurTeam />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
