import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submitForm', formData);
      console.log(response.data); // Log response from server

      // Reset form data after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Связаться с нами</h2>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя: *"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail: *"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder=" сообщение: *"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;