import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved.js";

import Container from "./components/layout/Container.js";
import Navbar from "./components/layout/Navbar.js";

function App() {
  let headers = new Headers();
  let blog;
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  fetch("http://localhost:5050/", {
    method: "GET",
    headers: headers,
  })
    .then((body) => body.json())
    .then((data) => (blog = data))
    .catch((res) => console.log(res));

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
