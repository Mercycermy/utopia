import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';  
import FixedButtons from './components/FixedButtons';


// (Placeholder pages for now)
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Projects'; // Projects.jsx now serves Initiatives
import Products from './pages/Services';    // Services.jsx now serves Products
import Contact from './pages/Contact';



class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/utopia">
      <FixedButtons />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    );
  }
}

export default App;


