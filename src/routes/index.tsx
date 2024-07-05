import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
  );
}