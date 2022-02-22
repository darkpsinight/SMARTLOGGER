import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;