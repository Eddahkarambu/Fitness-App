import React, {useState}  from "react";
import './Signup.css';
import './Navbar.css';
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
      };

      const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
      };

      const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
      };
  
    return (
      <div className="Sign">
          <div className="form">
            <form >
                    <label className="label">Name</label>           
                    <input onChange={handleName} className="input"
                    value={name} type="text"/>

                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                    value={email} type="email"/>

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                    value={password} type="password"/>

                    <label className="label">Confirm password</label>
                    <input onChange={handlePassword} className="input"
                    value={password} type="password"/>

                    <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button>
            </form> 
        </div>
      </div>
    );
  }
  
  export default Signup;