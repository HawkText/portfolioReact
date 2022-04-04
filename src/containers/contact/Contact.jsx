import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';
export const Contact = () => {


        
    const form = useRef();

    const sendEmail = (e) => {
        let x = document.forms["contact"]["subject"].value;
        let y = document.forms["contact"]["name"].value;
        let w = document.forms["contact"]["message"].value;
        if (x == "") {
            alert("Subject must be filled out");
            return false;
        }
        else if (y == "") {
            alert("Name must be filled out");
            return false;
        }
        else if (w == "") {
            alert("Message must be filled out");
            return false;
        }
        
    e.preventDefault();

    emailjs.sendForm('service_t477d9h', 'template_mh73ogk', form.current, 'Y7eerj57VqJULbIp2')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };
    function showSubmit(){
        document.getElementById("myP2").style.visibility = "visible"

    }
    return (
    <div className="contact_form" id="contact">
        <div className="form_container">
        <h1 className="gradient__text">Contact Matthew Hawkins</h1>
    <form ref={form} onSubmit={sendEmail} name ="contact" className="form_itself">
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Name</label>
        <input type="text" name="name" />
        <label>Company</label>
        <input type="text" name="company" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />

        <ReCAPTCHA sitekey="6LfzCkcfAAAAALBTrGgXoUsKJ0eetyajnu6g6iv5" onChange={showSubmit}/>
        <div className="contact_button" id="myP2" visibility="hidden">
        <button type="submit" value="Send">Contact Now</button>

    </div>
    </form>
    </div>
    </div>
    
    );
};

export default Contact;