import './Navbar.css';
import React, {useState, useEffect}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar(){
    const[showmenu, setshowmenu]=useState(false);
    return(
        <div className="navbar">
            <div className='header-icon'>
                <div className="Heading">
                    <div className='Eddah'>
                        <h1>EDDAH'S </h1>
                    </div>
                    <div className='fast'>
                        <h1>FAST FITNESS</h1>
                    </div>
                </div>

                <div className="Icon">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className="main-nav">
                <div><a className="active" href="#home">Home</a></div>
                <div><a href="#About">News</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
            <div className="mobile-nav">
                <div><a className="active" href="#home">Home</a></div>
                <div><a href="#About">News</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </div>

    );

}
export default Navbar