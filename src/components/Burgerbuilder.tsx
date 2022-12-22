import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BurgerStyle.css'
import { Button } from 'antd';
function Burgerbuilder(){
    const [lettuce, setLettuce] = useState(0);
    const [tomato, setTomato] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0);
    
    const addRemoveIngredient=(action : string, ingredient : string)=>{
    if(action ==='add'){
    
    switch(ingredient){
        case 'lettuce':{
            setLettuce(lettuce+1);
            break;
        }
        case 'tomato':{
            setTomato(tomato+1);
            break;
        }
        case 'cheese':{
            setCheese(cheese+1);
            break;
        }
        case 'meat':{
            setMeat(meat+1);
            break;
        }
        default:break;
    }
    }
    else{
        switch(ingredient){
            case 'lettuce':{
                setLettuce(lettuce-1);
                break;
            }
            case 'tomato':{
                setTomato(tomato-1);
                break;
            }
            case 'cheese':{
                setCheese(cheese-1);
                break;
            }
            case 'meat':{
                setMeat(meat-1);
                break;
            }
            default:break;
        }
    }
    }
    
    const burgerContent = () => {
        
        let burger = [];
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please add ingredients</p>);
        return burger;
    }
    
     const navigate = useNavigate();
    const Order=()=>{
        navigate('/Order',{state:[lettuce,tomato,cheese,meat]});
        
          }

    return(
        <> 
        <div className='Burger1'>
            
            <div className="burgerIngredients">
            {/* <div><h2>Let's build the Burger</h2></div> */}
                <div className="topSide"></div>
               
                {burgerContent()}
                <div className="bottomSide"></div>
            </div>

            <div className="ingredientsBlock">
                <p className="ptext">Salad</p>
                <div className="ingrBtns">
                <Button type='text' className="ingrBtn1" onClick={()=>addRemoveIngredient('add','lettuce')}>More</Button>
                <Button type='text' danger style={{color:'black'}} className="ingrBtn2" onClick={()=>addRemoveIngredient('less','lettuce')}>Less</Button>
    
                </div>
                <p>Bacon</p>
                <div className="ingrBtns">
                <Button type='text' className="ingrBtn1" onClick={()=>addRemoveIngredient('add','tomato')}>More</Button>
                <Button type='text' danger style={{color:'black'}} className="ingrBtn2" onClick={()=>addRemoveIngredient('less','tomato')}>Less</Button>
    
                </div>
                <p>CHEESE</p>
                <div className="ingrBtns">
                <Button type='text' className="ingrBtn1" onClick={()=>addRemoveIngredient('add','cheese')}>More</Button>
                <Button type='text' danger style={{color:'black'}} className="ingrBtn2" onClick={()=>addRemoveIngredient('less','cheese')}>Less</Button>
    
                </div>
                <p>Meat</p>
                <div className="ingrBtns">
                <Button type='text' className="ingrBtn1" onClick={()=>addRemoveIngredient('add','meat')}>More</Button>
                <Button type='text' danger style={{color:'black'}} className="ingrBtn2" onClick={()=>addRemoveIngredient('less','meat')}>Less</Button>
    
                </div>
            
            </div>

            <div className="ORDERPAGE">
                <Button type="link" className="button" onClick={()=>Order()}>Order</Button>
            </div>
            </div>
        </>
    );
}
export default Burgerbuilder;
