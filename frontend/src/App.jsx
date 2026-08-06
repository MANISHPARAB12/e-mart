import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import AllCategory from "./Pages/AllCategory";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allCategory" element={<AllCategory />} />
      </Routes>
    </>
  );
}

export default App;