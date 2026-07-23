import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import AllCategory from "./Pages/AllCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allCategory" element={<AllCategory />} />
    </Routes>
  );
}

export default App;