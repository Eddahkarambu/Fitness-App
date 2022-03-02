import React,{useState} from "react";
import './Contact.css';
import Navbar from './Navbar.js';

function Contact() {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');


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

      const handleMessage = (e) => {
        setMessage(e.target.value);
        setSubmitted(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if ( Name === '' || Email=== ''|| Message==='') {
          setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            alert("Successfully sent")
            }
      };


    return(
        <div className="Contacts">
            <Navbar/>

            <div className="contactus">
                CONTACT US
            </div>
           <div className="details">
             <form>
                {error && (
                    <div className="login"> 
                        Please enter all the fields correctly
                    </div>
                )}
               <label className="label">Name</label>
                <input onChange={handleName} className="input" placeholder="Your name.."
                value={Name} type="Name" />


                <label className="label">Email</label>
                <input  onChange={handleEmail} className="input" placeholder="Your email.."
                value={Email} type="email"/>

                <label className="label">Message</label>
                <input onChange={handleMessage}  className="input" placeholder="Write something.."
                value={Message} type="email"/>

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button>

                
               </form>
           </div>
        </div>

    )

}

export default Contact;