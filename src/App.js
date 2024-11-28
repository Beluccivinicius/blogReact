import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home.js";
import { authProvider } from "./Context/cadastroContext.js";
import { useState } from "react";
import Navbar from "./components/layout/Navbar.js";
import Cadastro from "./pages/cadastro/Cadastro.js";
import Login from "./pages/login/Login.js";
import Context from "./Context/cadastroContext.js";
import CodigoVerificar from "./pages/codigoVerificar/CodigoVerificar.js";

function App() {
  return (
    // <authProvider.Provider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/codigoVerificar" element={<CodigoVerificar />} />
      </Routes>
    </Router>
    /* </authProvider.Provider> */
  );
}

export default App;
