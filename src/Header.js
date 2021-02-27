import React from 'react'
import "./Header.css";
import slide from "./images/slide1.png";

function Header() {
    return (
        <div className = "container">
            <header className = "main-header">
                <h2>Surface Deals</h2>
                <p>Surface are on sale now - save while supplies last</p>
                <a className= "btn" href = "#">Shop Now<i class = "fas fa-chevron-right"></i></a>

            </header>
            

            
        </div>
    )
}

export default Header
