import React, { useEffect } from 'react'
import Navbar from "../../components/navigation/Navbar";
import Header from "../_header/Header";
import About from "../_about/About";
import Career from "../_career/Career";
import Portfolio from "../_portfolio/Portfolio";
import Skills from "../_skills/Skills";
import Footer from "../_footer/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Catarina Cunha"
  }, [])

  return (
    <>
      <main className="App">
        <div className="container">
          <Header />
          <About />
          <Career />
          <Portfolio />
          <Footer />
        </div>
      </main>
      <footer>
        <div>© Catarina Cunha {new Date().getFullYear()}</div>
        <div>Developed by <a href="https://marcosalves.io/" target="_blank" rel='noreferrer'>@marcosalves</a></div>
      </footer>
    </>
  );
}

export default App;
