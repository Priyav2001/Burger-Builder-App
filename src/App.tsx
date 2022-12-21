import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Burgerbuilder from './components/Burgerbuilder';
import Order from './components/Order';
export default function App() {
  return (
    <>
     <Router>
         <Routes>
          <Route path="/" element={<Navbar/>}></Route>
          <Route path="/Burgerbuilder" element={<Burgerbuilder/>}></Route>
          <Route path="/Order" element={<Order/>}></Route>
        </Routes>
      </Router>
    </>
);
  }
 
