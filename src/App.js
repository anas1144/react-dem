import React from 'react';

import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom"

import Header from './Content/Header/Header';

import Home from './Content/Home/Home';
import About from './Content/About/About';
import Contact from './Content/Contact/Contact';


const App = () => {
  return (
    <div className="App">
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;