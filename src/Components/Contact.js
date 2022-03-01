import React  from "react";
import './Contact.css';

function Contact() {
    return(
        <div className="Contacts">
           <Navbar />
           <div className="details">
           {/* <form>
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                    value={email} type="email" />

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                    value={password} type="password" />

                    <button onClick={handleSubmit} className="button" type="submit">
                   Submit
                    </button>
            </form>  */}

           </div>
        </div>

    )

}

export default Contact;