import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./styles/app.scss";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/logement/FichLogment";
import NoPage from "./pages/error/NoPage";

const creatHashRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
};

const App = () => {
  return (
    <div className="App">{creatHashRouter()}</div>
  );
};

export default App;
