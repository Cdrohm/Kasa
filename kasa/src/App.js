//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Housing from "./pages/housing";
import About from "./pages/about";
import Error from "./pages/error";


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter className="container" basename="/Kasa">
      
        <div className="App">
          <div className="content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Housing />} />
              <Route path="/apropos" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
     
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
