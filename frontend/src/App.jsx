import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllCategory from "./Pages/AllCategory";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCategory" element={<AllCategory />} />
      </Routes>

      <Home/>
    </>
  );
}

export default App;