import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved.js";
import { useState } from "react";
import Container from "./components/layout/Container.js";
import Navbar from "./components/layout/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Saved />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
