import React from "react";
import NavBar from "./NavBar";
import "./style.css";
import Header from "./Header";
import Portfolio from "./Portfolio"
import About from "./About"

const App = () => {
  return (
      <div>
          <NavBar />
          <Header/>
          <Portfolio/>
          <About/>
      </div>
  )
};

export default App;
