import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import PoemDetail from "./pages/PoemDetail"; 
import AdminPanel from "./pages/AdminPanel";
import Contribute from "./pages/Contribute";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li> */}
            {/* <li><Link to="/admin">Admin Login</Link></li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/poem/:id" element={<PoemDetail />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/contribute" element={<Contribute />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
