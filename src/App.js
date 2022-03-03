import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./views/Home";
import Irrigation from "./views/Irrigation";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/irrigation' element={<Irrigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;