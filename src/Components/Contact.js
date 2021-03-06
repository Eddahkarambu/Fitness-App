import React,{useState} from "react";
import './Contact.css';
import Navbar from './Navbar.js';
import { SocialIcon } from 'react-social-icons';



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
            <div className="All">
           <div className="details">
             <form>
                {error && (
                    <div className="login"> 
                        Please enter all the fields correctly
                    </div>
                )}
               <label className="contact-label">Name</label>
                <input onChange={handleName} className="contact-input" placeholder="Your name.."
                value={Name} type="Name" />


                <label className="contact-label">Email</label>
                <input  onChange={handleEmail} className="contact-input" placeholder="Your email.."
                value={Email} type="email"/>

                <label className="contact-label">Message</label>
                <input onChange={handleMessage}  className="contact-input" placeholder="Write something.."
                value={Message} type="email"/>

                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                    </button>
               </form>
           </div>

           <div className="All2">
               <div className="All3">
               <div className="call">
               CALL US
               </div>
               <div className="number">
                   0724298956
               </div>
               </div>

                <div className="All3">
               <div className="call">
               LOCATION
               </div>
               <div className="number">
                   Roysambu ,Lumumba drive
               </div>
               </div>


            <div className="All3">
               <div className="call">
               BUSINESS HOURS
               </div>
               <div className="number">
                   Mon - Fri--10am-8pm
                   sat,Sun -- Closed
               </div>
               </div>
               
           </div>
           </div>

           <div className="logo">
               <div className="logo1">
                   ITS NEVER TOO LATE TO FEEL GREAT.
                   
               </div>
               <div className="logo2">
                 You can also find us on our social media platforms;
               </div>
               <div className="logo3">
               <SocialIcon network="twitter" style={{  margin: '20px'}}/>
               <SocialIcon network="instagram" style= {{  margin:'20px'}}/>
               <SocialIcon network="facebook" style={{ margin: '20px '}}/>
               </div>
           </div>
        </div>

    )

}

export default Contact;