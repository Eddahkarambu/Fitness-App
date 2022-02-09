import './home.css';
function Home() {
    return (
      <div className="home">
          <div className="Heading">
              <div className='Eddah'>
          <h1>EDDAH'S </h1>
          </div>
          <div className='fast'>
            <h1>FAST FITNESS</h1>
            </div>
          </div>

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

          <div className="button">
              <button>Sign in</button>
          </div>
      </div>
    );
  }
  
  export default Home;