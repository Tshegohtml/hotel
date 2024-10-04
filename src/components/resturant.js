import React from 'react';
import Drinks from "../components/drinks.jfif";
import Desert from "../components/desert.jfif";
import Menu from "../components/menu.jfif";
import Dijo from "../components/dijo.jfif";
import Food from "../components/food.jfif";
import Meals from "../components/meals.jfif";
import Deserts from "../components/deserts.jfif";
import Kitchen from "../components/kitchen.jfif";



function Resturant() {
  return (
    <div className="word-container">
      <div className="h-heading">
        <h1>ABOUT OUR RESTURANT</h1>
      </div>
      <div className="wording">
        <p>OUR MENU</p>
      </div>
      <div className="p-container">
        <div className="img-div">
          <img className="picture-img" src={Drinks} alt="Drinks " />
          <img className="picture-img" src={Desert} alt="Desert" />
          <img className="picture-img" src={Menu} alt="Menu" />
       
        </div>
      </div>
     
      <div className="menu-head">
       
      </div>
      <div className="food-heading">
        <p>OUR FOOD</p>
      </div>
      <div className="img-container">
        <div className="img-div">
          <img className="picture-img" src={Dijo} alt="Dijo" />
          <img className="picture-img" src={Food} alt="Food" />
          <img className="picture-img" src={Meals} alt="Meals" />
          <img className="picture-img" src={Deserts} alt="Deserts" />
        </div>
      </div>
      
   
   
      <div className="the-heading">
        
      </div>
      <div className="heading">
        <p>THE RESTURANT</p>
      </div>
      <div className="img-container">
        <div className="img-div">
          <img className="picture-img" src={Kitchen} alt="Kitchen" />
          
          
        </div>
      </div>
      
   
    </div>
  );
}

export default Resturant;
