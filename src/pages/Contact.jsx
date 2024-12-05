import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-center">Наши координаты</h1>
      <p className="text-lg text-gray-600 text-center">
      Есть вопросы или хотите узнать больше? Свяжитесь с нами.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
