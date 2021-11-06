import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_h5ghqm2', e.target, 'user_i6OikfQd7WbuDRkC9K1Iu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
    <h4>- CONTACT US -</h4>
    <h6> Email us with any question. We would be happy to answer your questions.</h6>
    <form className="frm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="inpt"  type="text" name="name" />
      <label >Subject</label>
      <input className="inpt" type="text" name="Subject" />
      <label >Email</label>
      <input className="inpt"type="email" name="email" />
      <label >Message</label>
      <textarea style={{padding:"20px", marginTop:"2%", borderColor:"black"}} name="message" />
      <input style={{margin:"auto", width:"20%", backgroundColor:"darkblue", borderRadius:"5px", color:"white"}} type="submit" value="Send" />
    </form>
    </>
  );
};