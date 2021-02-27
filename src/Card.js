import React from 'react';
import Cards from "./Cards";
import "./Card.css";
import Card1 from "./images/card1.png";
import Card2 from "./images/card2.png";
import Card3 from "./images/card3.png";
import Card4 from "./images/card4.png";


function Card() {
    return (
        <div className = "container">
            <div className = "card-container">
             <Cards image = {Card1}
             title = "Bundle and save up to $460"
             description = "Complete your Surface Pro 7 with choice of select Type Cover."
      />
      <Cards image = {Card2}
              title = "Save up to $800 on select Surface Laptop 3"
             description = "Save $400 now when you buy a new Surface Laptop 3 and get up to $400 back when you trade in an eligible device."
      />
      <Cards image = {Card3}
              title = "Do more with Windows"
             description = "Shop tablets, laptops, all-in-ones, gaming PCs, and more."
      />
      <Cards image = {Card4}
              title = "Microsoft Edge"
             description = "World-class performance with more privacy, more productivity, and more value while you browse."
      />
            </div>
    
            
        </div>
    )
}

export default Card
