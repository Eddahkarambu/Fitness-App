import React, {useState}  from "react";
import './Signin.css';
import './Navbar.css';
function Signin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
      <div className="Signin">
          <div className="signinform">
            <form >
                    <label className="label">Email</label>
                    <input className="input"
                    value={email} type="email" />

                    <label className="label">Password</label>
                    <input className="input"
                    value={password} type="password" />

                    <label className="label">Confirm password</label>
                    <input className="input"
                    value={password} type="password" />

                    <button  className="button" type="submit">
                    Submit
                    </button>
            </form> 
        </div>
      </div>
    );
  }
  
  export default Signin;