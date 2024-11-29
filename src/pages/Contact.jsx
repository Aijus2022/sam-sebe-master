import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <h1>Contact Us</h1>
      <p>Have questions or want to learn more? Reach out to us using the form below.</p>
      <ContactForm />
    </div>
  );
};

export default Contact;