import React  from "react";
import './Service.css';
import Navbar from './Navbar.js';
import work1 from '../images/work1.jpeg'
import work2 from '../images/work2.jpeg'
import work3 from '../images/work3.jpeg'

function Service() {
    return(
        <div className="Offers">
             <Navbar />
             <div className="workouts">
                 <div className="heading">
                      HAVE A LOOK AT OUR FEATURED CLASSES
                 </div>
                 <div className="needs">
                 Let us take your workout routines to the next level with our full-body programs and intensity challenges.
                 Find a training that matches your needs.
                 </div>

                 <div className="workout">
                <img className="work" src={work1} alt="work1"/>
                <img class="work" src={work2} alt="work2"/>
                 <img class="work" src={work3} alt="work3"/>
            </div>

            <div className="Every">
            <div>
                <div className="Explanation">
                AEROBICS/ZUMBA
            </div>
            <div className="Paragraph">
            Energize your mornings and come train and workout with our personal trainers at Eddah's Gym. 
            Join our Aerobics Yoga and Zumba lessons and have fun while exercising.
            </div>
            </div>

            <div>
            <div className="Explanation">
                CROSSFIT TRAINING  
            </div>

            <div className="Paragraph">
            Train with the best of the best in an intense workout session under the expert guidance of our personal trainers only at Eddah's Gym.
            </div>
            </div>

            <div>
            <div className="Explanation">
                CARDIO TRAINING
            </div>
            <div className="Paragraph">
            Work on your abs and core with state-of-the-art equipments specially brought to you by the best gym .
            </div>
            </div>
            </div>

            <div className="Every1">
            <div>
            <div className="Explanation">
                EDUARANCE TRAINING    
            </div>
            <div className="Paragraph">
            Improve your stamina and workout with your friends while listening to trendy tune at one of the hottest gym in Nairobi.
            </div>
            </div>

           <div>
            <div className="Explanation">
               SRENGTH TRAINING
            </div>
            <div className="Paragraph">
            Build your strength and get those extra few pounds in before the swimsuit season. 
            Come train under expert personal trainers .
            </div>
            </div>

            <div>
            <div className="Explanation">
                WEIGHT LOSS
               
            </div>
            <div className="Paragraph">
            Lose extra weight and get in shape with expert personal trainers and top notch fitness equipments only at Eddah's Gym, the best gym in Nairobi.
            </div>
            </div>
            </div>
             </div>
        </div>

    )

}

export default Service;