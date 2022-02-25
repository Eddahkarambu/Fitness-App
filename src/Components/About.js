import React  from "react";
import './About.css';
import Navbar from './Navbar.js';
import strong from '../images/strong.jpeg'
import strong2 from '../images/strong2.jpeg'
import strong3 from '../images/strong3.jpeg'

function About() {
    return(
        <div className="description">
            <Navbar />

            <div className="description1">
            <div className="gym">
            WE ARE GYM AND FITNESS
            </div>
            <div className="gym1">
            Helping people live longer, happier and healthier lives.
            Instead of being just like any  other gym , we wanted to be the best in the industry and by  doing so
            We have some pretty amazing people working with us, who hustle everyday to give you the best possible experience!
            We know that building a positive culture is incredibly important. We believe in encouraging, supporting, challenging, learning and growing to be the best!
            </div>
            <div className="gym2">
                OUR VALUES
            </div>
            <div className="gym3">
                Helping customers reach their fitness goals has been at the heart of what we do and why we do it ,
                We live and breathe our three core values and promises
                which speak of our commitment to our customers, staff, the industry and our business as a whole.
            </div>
            
            <div className="image">
            <img className="fit-picture" src={strong} alt="strong"/>
            <img class="fit-picture" src={strong2} alt="strong2"/>
           <img class="fit-picture" src={strong3} alt="strong3"/>
            </div>

            <div className="Services">
            <div>
            <div className="gym4">
            Customer Service
            </div>
            <div className="gym5">
            Customers are why we exist and we are passionate about delivering exceptional, personalised customer service to all.
            </div>
            </div>

            <div>
            <div className="gym4">
            Communication
            </div>
            <div className="gym5">
            We believe open, direct and supportive communication is the foundation of any successful organisation.
            </div>
            </div>

            <div>
            <div className="gym4">
            Teamwork
            </div>
            <div className="gym5">
            We are committed to common goals, with effective communication and accountability making our team achieve greater results.
            </div>
            </div>
            </div>


            
            
            </div>
        </div>

    )

}

export default About;
