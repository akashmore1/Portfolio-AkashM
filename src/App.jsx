import React from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

import Contact from "./components/contact/Contact";

import ParticlesBg from "./components/particles/Particles";
import Cursor from "./features/Cursor";

const App = () => {
  return (
    <>
      <ParticlesBg />
      <Cursor />
      <Header />
      <Home />
      <Nav />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
