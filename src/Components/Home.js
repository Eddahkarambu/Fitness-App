import './home.css';
import Navbar from './Navbar.js';
import { useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/signup`; 
      navigate(path);
    }

    
    return (
      <div className="home">
           <Navbar />
          <div className="Heading2">
              <div className='workout1'>
                  <div className='shorter'>
                    <h2>SHORTER WORKOUTS,</h2>
                </div>
                <div className='better'>
                    <h2>BETTER RESULTS</h2>
                </div>
          </div>

          <div className="workout2">
          <h3>SHORT, MANAGEABLE WORKOUTS FOR </h3>
          <h3>PEOPLE WITH NO TIME</h3>
          </div>
          
          </div>

          <div className="submit-button"  color="primary" 
            onClick={routeChange}>
              Sign up
          </div>
          <div className="submit-button1">
              Sign in   
          </div>
      </div>
    );
  }
  
  export default Home;