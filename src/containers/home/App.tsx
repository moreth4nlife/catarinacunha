import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Header from "../_header/Header";
import About from "../_about/About";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
      </Router>

      <div className="container">
        <Header />
        <About />
      </div>
    </main>
  );
}

export default App;
