import React, { useState} from "react";
import {useLocation} from 'react-router-dom';
import { Button, Popover } from 'antd';
// import { Button } from 'antd';
import './Order.css'
function Order(){
 
    const location = useLocation();
    let lettuceprice=location.state[0]*2;
    let tomatoprice=location.state[1]*1;
    let cheeseprice=location.state[2]*3;
    let meatprice=location.state[3]*4;
    let total=lettuceprice+tomatoprice+cheeseprice+meatprice;
    const myarray=[location.state[0],location.state[1],location.state[2],location.state[3]];

  const [popup,setPop]=useState(false)
  const handleClickOpen=()=>{
      setPop(!popup)
      return(
        "The price is"
      );
  }
  const closePopup=()=>{
      setPop(false)
  }
  return(
    <div className="Orderpage">
      <div className="Orderpage1">
      <Popover content={handleClickOpen} trigger="click">
        <Button style={{backgroundColor:"#A47551", color:"white", justifyContent:'center'}} className="click" onClick={handleClickOpen}>Let's continue to order</Button>
        </Popover>


          
            <div className="arrayitems">
            <h3>Ordered items</h3>
            <p>Salad: {myarray[0]}</p>
            <p>Bacon: {myarray[1]}</p>
            <p>Cheese: {myarray[2]}</p>
            <p>Meat: {myarray[3]}</p>
            </div>
            
              {
                  popup?
                  <div className="main">
                      <div className="popup">
                          <div className="popup-header">
                              <h1 className="cross" onClick={closePopup}>X</h1>
                          </div>
                          <div>
                            <h1 className="pp">Rs: {total}</h1>
                          </div>
                      </div>
                  </div>:""
              }
            
          </div>
      </div>
    
  )
            }
export default Order;
