
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';



import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
