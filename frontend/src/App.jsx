import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import ProductCategory from "./Pages/ProductCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:category" element={<ProductCategory />} />
    </Routes>
  );
}

export default App;