import React from 'react';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Sheduledemo from './components/Sheduledemo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contactus';
import ScrollToTop from './components/scroll';



function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shedule" element={<Sheduledemo />} />
      </Routes>
    </Router>

    
    </>
    
  );
}

export default App;
