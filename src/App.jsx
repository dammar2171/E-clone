import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import Shop from "./Pages/Shop.jsx";
import Services from "./Pages/Services.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-Us" element={<AboutUs />} />
        <Route path="/our-Team" element={<OurTeam />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
