import React, { useEffect } from 'react'
import Navbar from "../../components/navigation/Navbar";
import Header from "../_header/Header";
import About from "../_about/About";
import Career from "../_career/Career";
import Portfolio from "../_portfolio/Portfolio";
import Skills from "../_skills/Skills";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Catarina Cunha"
  }, [])

  return (
    <main className="App">
      <div className="container">
        <Header />
        <About />
        <Career />
        <Portfolio />
        <Skills />
      </div>
    </main>
  );
}

export default App;
