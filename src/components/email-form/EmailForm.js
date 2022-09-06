import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './EmailForm.css'

export default function EmailForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xk6ax2c', 'template_d7ulv9w', form.current, 'KWDhvwfuxMYlKzSX1')
      .then((result) => {
          alert('Email was sent!');
          window.location.reload();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='emailContainer'>
      <form className='emailForm' ref={form} onSubmit={sendEmail}>
        <input className='emailInput' placeholder="Name" type="text" name="user_name" />
        <input className='emailInput' placeholder="Email" type="email" name="user_email" />
        <textarea className='emailInput' placeholder="Your Message" name="message" />
        <Button className='emailFormSubmit' type="submit" value="Send" >Send Message</Button>
      </form>
    </div>
  );
};