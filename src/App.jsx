import React from "react";
import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Overview from "./sections/Overview";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Presence from "./sections/Presence";
import Awards from "./sections/Awards";
import GetInTouch from "./sections/GetInTouch";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <Clients />
      <Awards />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
