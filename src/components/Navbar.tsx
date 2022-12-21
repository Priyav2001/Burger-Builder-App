import React from "react";
import { useNavigate } from 'react-router-dom';
import Logoimg from "./logo";
import './Navbar.css'
function Navbar(){
    const navigate = useNavigate();
    const navigateToBurgerbuilder = () => {
       
        navigate('/Burgerbuilder');
       
      };
      return (
        <>
        <nav className="navbar">
            <h1 className="text">Burgerbuilder App</h1>
        </nav>
        <div className="centerimg">
            <Logoimg/>
        </div>
        
        <div className="Burger">
            <button className="button1" onClick={navigateToBurgerbuilder}>Let's Create Burger..!</button>
            
        </div>
        </>
        
    )
}
export default Navbar;
