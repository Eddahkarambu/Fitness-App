import './Navbar.css';
import React, {useState}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Navbar(){
    const[showMenu, setShowMenu]=useState(false);

    const ShowMenuButtonClick = () => {
        setShowMenu(!showMenu)
    }
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
                    <FontAwesomeIcon icon={faBars} onClick={ShowMenuButtonClick}/>
                </div>
            </div>
            <div className="main-nav">
                <Link to='/Home' className='Home'>Home</Link>
                <Link to='/About' className='About'>About</Link>
                <Link to='/Services' className='Services'>Services</Link>
                <Link to='/Contact' className='Contact'>Contact</Link>
            </div>
            {showMenu && (
                <div className="mobile-nav">
                 <Link to='/Home' className='Home'>Home</Link>
                <Link to='/About' className='About'>About</Link>
                <Link to='/Services' className='Services'>Services</Link>
                <Link to='/Contact' className='Contact'>Contact</Link>
                </div>
            )}
        </div>

    );

}
export default Navbar