import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.js";
import { useState } from "react";
import Navbar from "./components/layout/Navbar.js";
import Cadastro from "./pages/cadastro/Cadastro.js";
import Login from "./pages/login/Login.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
