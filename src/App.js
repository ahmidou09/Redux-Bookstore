import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';

const App = () => (
  <>
    <Navigation />
    <div className="container">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </>

);
export default App;
