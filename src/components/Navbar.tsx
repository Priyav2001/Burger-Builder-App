import React from "react";
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import Logoimg from "./logo";
import { Button } from 'antd';
import './Navbar.css'
function Navbar(){
    const navigate = useNavigate();
    const navigateToBurgerbuilder = () => {
       
        navigate('/Burgerbuilder');
       
      };
      return (
        <>
        <Layout className="layout">Burgerbuilder App
        </Layout>


        <div className="centerimg">
            <Logoimg/>
        </div>
        
        <div className="Burger">
            <Button type="primary" style={{alignItems:'center'}}className="button1" onClick={navigateToBurgerbuilder}>Let's Create Burger..!</Button>
        </div>
        </>
        
    )
}
export default Navbar;
