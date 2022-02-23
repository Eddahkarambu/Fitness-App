import React, {useState}  from "react";
import './Signin.css';
function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);



    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };

      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        if ( email === '' || password === '') {
          setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            alert("You have successfully signed in")
            }
      };
    
    return (
      <div className="Signin">
          <div className="signinform">
            <form >
            {error && (
                    <div className="log"> 
                        Please enter all the fields correctly
                    </div>
                )}
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                    value={email} type="email" />

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                    value={password} type="password" />

                    <button onClick={handleSubmit} className="button" type="submit">
                   Submit
                    </button>
            </form> 
        </div>
      </div>
    );
  }
  
  export default Signin;