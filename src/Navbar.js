import React , {useState}from 'react';
import "./Navbar.css";
import logo from './images/logo.png';

function Navbar (){ 
    
    const[openLinks,setOpenLinks] = useState(false);

    const handleToggle = () => {
        setOpenLinks(!openLinks)
    }
    const renderClasses = () => {
            
        let classes = "primary-links";

        if(openLinks){
        classes = "show"
        }
        return classes
    }
  return (
        <>
         <div onClick = {handleToggle} className = "toggle-btn">
                             <i className = "fas fa-bars"></i>
         </div>
                
        <div className = 'container'>
            
                <nav className = 'main-nav'>

                        <img className = "logo"src ={logo} alt = "Microsoft"/>
                        <ul className = {renderClasses()}>
                            <li><a href = "#">Office</a></li>
                            <li><a href = "#">Windows</a></li>
                            <li><a href = "#">Surface</a></li>
                            <li><a href = "#">XBox</a></li>
                            <li><a href = "#">Deals</a></li>
                            <li><a href = "#">Support</a></li>
                        </ul>
                        <ul className ='secondary-links'>
                            <li>
                                <a href="#">
                                    <i className="fas fa-search"></i>
                                </a>
                            </li>
                            <li>
                                <a href= "#">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                            
                        </ul>
                        
                </nav>
                
    
            
        </div>
        </>
    )
}

export default Navbar
