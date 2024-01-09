import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import Titles from '../../components/Titles/Titles';
import Button from '../../components/Button/Button';
import { BsFillSendCheckFill } from 'react-icons/bs';
import Contact_img from '../../assets/contact_img.png';
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages';
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage';
import Contact_img_02 from '../../assets/contact_img_02.png';

export default function ContactPage() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const handleChange = (e) => {
    const emailValue = e.target.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailPattern.test(emailValue);

    setEmail(emailValue);
    setValidEmail(isValidEmail);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validEmail) {
      console.log('Valid email: ' + email);
      emailjs
        .sendForm('service_xcat7ip', 'template_21deuyb', form.current, '-kV9F-1LyRZhtmyar')
        .then(
          (result) => {
            console.log(result.text);
            setShowNotification(true);
            setMessageSent('Your Message has been sent Successfully!');
            setEmail('');
            setValidEmail(false);
            // Réinitialiser le formulaire
            e.target.reset();
            // Effacer la notification après 3 secondes
            setTimeout(() => {
              setShowNotification(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log('Invalid email: ' + email);
    }
  };

  return (
    <>
      <FirstSectionOfPages title="Contact Me" logo={Contact_img} />
      <div className="container">
        <section className="contact my-5" id="contact">
          <Titles title="contact me" />
          <div className="message_sent">
            {showNotification && (
              <div className="notification">
                {messageSent ? <h2>{messageSent}</h2> : <p>Your Message Not Sent, Technical Problems.</p>}
              </div>
            )}
          </div>
          <div className="contact_info" id="mobile_column">
            <div className="text_img">
              <img src={Contact_img_02} alt="contact image" />
            </div>
            <div>
              <div className="text">
                <h1>Send me a message</h1>
                <p className="text_desc">Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="inputBox">
                  <input type="text" placeholder="Your Name" name="user_name" />
                  <input type="email" className="email_input" onChange={handleChange} value={email} placeholder="Your Email" name="user_email" />
                  <div className="email_validation">
                    {validEmail ? <p className="valid">Email Valid.</p> : <p className="not_valid">Invalid Email.</p>}
                  </div>
                </div>
                <textarea name="message" placeholder="Your Message" cols="30" rows="10"></textarea>
                <input type="submit" className="inp_send_btn" value="Send Message" />
              </form>
            </div>
          </div>
        </section>
      </div>
      <MoveToNextPage move_title="Back To Home" move_link="/" />
    </>
  );
}
