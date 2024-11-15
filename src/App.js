import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.js";
import { authProvider } from "./Context/cadastroContext.js";
import { useState } from "react";
import Navbar from "./components/layout/Navbar.js";
import Cadastro from "./pages/cadastro/Cadastro.js";
import Login from "./pages/login/Login.js";
import Context from "./Context/cadastroContext.js";

function App() {
  return (
    // <authProvider.Provider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/codigoVerificar" element={<codigoVerificar />} />
      </Routes>
    </Router>
    /* </authProvider.Provider> */
  );
}

export default App;
