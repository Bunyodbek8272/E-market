import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Porducts from "./components/Porducts";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
function App() {
  return (
    <>
      {/* <Navbar />
      <Home /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Porducts />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
