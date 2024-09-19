import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import Titles from '../../components/Titles/Titles';
import Contact_img from '../../assets/contact_img.png';
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages';
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage';
import Contact_img_02 from '../../assets/contact_img_02.png';

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  user_name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  user_email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

export default function ContactPage() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [messageSent, setMessageSent] = useState(''); // Message to display in the modal

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const sendEmail = (data) => {
    emailjs
      .sendForm('service_xcat7ip', 'template_21deuyb', form.current, '-kV9F-1LyRZhtmyar')
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent('Your Message has been sent Successfully!');
          setShowModal(true); // Show the modal on success
          reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal when the user clicks the close button
  };

  return (
    <>
      <FirstSectionOfPages title="Contact Me" logo={Contact_img} />
      <div className="container">
        <section className="contact my-5" id="contact">
          <Titles title="contact me" />
          <div className="contact_info" id="mobile_column">
            <div className="text_img">
            <img src={Contact_img_02} alt="Contact illustration" />
            </div>
            <div>
              <div className="text">
                <h1>Send me a message</h1>
                <p className="text_desc">Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
              </div>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    {...register('user_name')}
                  />
                  {errors.user_name && <p className="error-message">{errors.user_name.message}</p>}

                  <input
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    {...register('user_email')}
                  />
                  {errors.user_email && <p className="error-message">{errors.user_email.message}</p>}
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  cols="30"
                  rows="10"
                  {...register('message')}
                ></textarea>
                {errors.message && <p className="error-message">{errors.message.message}</p>}
                <input type="submit" className="inp_send_btn" value="Send Message" />
              </form>
            </div>
          </div>
        </section>
      </div>
      <MoveToNextPage move_title="Back To Home" move_link="/" />

      {/* Popup Modal */}
      {showModal && (
        <div className="popup-modal">
          <div className="popup-modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{messageSent}</h2>
          </div>
        </div>
      )}
    </>
  );
}
