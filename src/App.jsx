import React, { Component } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';  
import FixedButtons from './components/FixedButtons';


// (Placeholder pages for now)
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiative'; // Initiative.jsx now serves Initiatives
import Products from './pages/Product';    // Services.jsx now serves Products
import Contact from './pages/Contact';



class App extends Component {
  render() {
    return (
     <HashRouter>
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
</HashRouter>

    );
  }
}

export default App;


