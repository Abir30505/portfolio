import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/signup';
import Products from './components/products';
import Login from './components/login';

const App = () => {
  return (
    <div className='main-div'>
      <Router>
        <Navbar className='nav'/> 
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} /> {/* About  */}
          <Route path='/contact' element={<Contact />} /> {/* Contact page route */}
          <Route path='/signup' element={<Signup />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
