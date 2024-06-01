import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Products from '../pages/Products';
import SingleUser from "../pages/SingleUser"



export default function AllRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for home page */}
      <Route path="/about" element={<About />} /> {/* Route for about page */}
      <Route path="/login" element={<Login />} /> {/* Route for Login page */}
      <Route path="/Products" element={<Products/>}/>{/* Route for Products page */}
      <Route path="/SingleUser/:userId" element={<SingleUser />} /> {/* Route for SingleUser page with dynamic userId parameter */}
    </Routes>
  );
}
