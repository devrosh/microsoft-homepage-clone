import React from 'react';
import "./Cards.css";

function Cards(props) {
    return (
        
            <section className = "home-cards">
                <div className = "cards">
                    <img src = {props.image} alt = "picture"/>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <a href = "#">Learn More <i className = "fas fa-chevron-right"></i></a>

                </div>

            </section>
            
    
    )
}

export default Cards;
