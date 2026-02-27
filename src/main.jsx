import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// import Sobre from "./pages/Sobre";
// import Cursos from "./pages/Cursos";
// import Projetos from "./pages/Projetos";
// import Contato from "./pages/Contato";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      
      <Header />

      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/sobre" element={<Sobre />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} /> */}
        </Routes>
      </main>

      <Footer />

    </div>
  </BrowserRouter>
);