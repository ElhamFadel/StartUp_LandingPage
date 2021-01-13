import React from 'react';
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import WorkFlowArea from "./component/WorkFlowArea";
import Customer from "./component/Customer";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.css";
 
import {
    BrowserRouter as Router
  } from "react-router-dom";

function App() {
    return (
        <Router>
           <Navbar />
           <Hero />
          <Features />
            <WorkFlowArea />  
          <Customer />
          <Contact />
          <Footer />
        </Router>
    )
}

export default App
