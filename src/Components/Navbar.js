import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
        <div className="topnav">
        <div className="Heading">
              <div className='Eddah'>
          <h1>EDDAH'S </h1>
          </div>
          <div className='fast'>
            <h1>FAST FITNESS</h1>
            </div>
          </div>
            <div className="main-nav">
            <a className="active" href="#home">Home</a>
            <a href="#About">News</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            </div>
        </div>

        </div>

    );

}
export default Navbar