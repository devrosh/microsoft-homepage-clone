import React from 'react';
import Cards from "./Cards";
import Card5 from "./images/card5.png";
import Card6 from "./images/card6.jpg";
import Card7 from "./images/card7.png";
import Card8 from "./images/card8.png";


function Card2() {
    return (
        <div className = "container">
             
            <div className = "card-container">
             <Cards image = {Card5}
             title = "Bundle and save up to $460"
             description = "Complete your Surface Pro 7 with choice of select Type Cover."
      />
      <Cards image = {Card6}
              title = "Save up to $800 on select Surface Laptop 3"
             description = "Save $400 now when you buy a new Surface Laptop 3 and get up to $400 back when you trade in an eligible device."
      />
      <Cards image = {Card7}
              title = "Do more with Windows"
             description = "Shop tablets, laptops, all-in-ones, gaming PCs, and more."
      />
      <Cards image = {Card8}
              title = "Microsoft Edge"
             description = "World-class performance with more privacy, more productivity, and more value while you browse."
      />
            </div>
    
            
        </div>
    )
}

export default Card2
