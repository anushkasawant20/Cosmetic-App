
import { colors } from "@mui/material";
import React from "react";

function Contact(){
    return(
      <>
      <br/>
     <br/>
     <br/>

        <div className="contact-container">
        <h2 style={{color:"black"}}>Contact Us</h2>
    
        <div className="website-info">
          <p style={{color:"black"}}><strong>Our Website:</strong> <a href="https://www.yourwebsite.com" target="_blank">www.yourwebsite.com</a></p>
          <p style={{color:"black"}}><strong>Address:</strong> Indovance Plaza,First Floor Shop No-4,Pune.</p>
          <p style={{color:"black"}}><strong>Phone:</strong>9922987635</p>
          <p style={{color:"black"}}><strong>Email:</strong> <a href="shopsticglow12@gmail.com">shopsticglow12@gmail.com</a></p>
          <p style={{color:"black"}}><strong>Follow Us:</strong> 
            <a href="https://www.facebook.com/yourpage" target="_blank">Facebook</a> | 
            <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a> | 
            <a href="https://www.instagram.com/yourprofile" target="_blank">Instagram</a>
          </p>
        </div>
        
      
        
        <form className="contact-form"/>
          <label style={{color:"black"}} htmlfor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required/>
      
          <label style={{color:"black"}} htmlfor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required/>
      
          <label style={{color:"black"}} htmlfor="message">Message</label>
          <textarea id="message" name="message" rows="1" placeholder="Your message" required></textarea>

          <button type="submit" className="btn-btn Success">Send Message</button>
         
        <form/>
       
      
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </>
      
    );
}

export default Contact;