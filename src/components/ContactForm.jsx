import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">Связаться с нами</h2>
      <div className="space-y-4 text-gray-800">
        <div>
          <strong>Адрес:</strong>
          <p>ул. Чуй, д. 101, Бишкек, Кыргызстан</p>
        </div>
        <div>
          <strong>Email:</strong>
          <p>
            <a href="mailto:admin@sam-sebe-master.netlify.com" className="text-blue-500 underline">
              admin@sam-sebe-master.netlify.com
            </a>
          </p>
        </div>
        <div>
          <strong>Телефон:</strong>
          <p>
            <a href="tel:+996550123456" className="text-blue-500 underline">
              +996 (550) 123-456
            </a>
          </p>
        </div>
        <div>
          <strong>Мы на карте:</strong>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.8126065441566!2d74.58382331538327!3d42.87498207915654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec83e8ed3b2db%3A0x60af6db511eae658!2z0JHQsNC70YzQvdGL0Lkg0JDQtNGA0YzQuNC90L7Qs9C-LCDQm9C10LrRgdC60L7QuSDQn9C-0LHQvtCz0LDRgNC40Y8g0KHQtdCw0LrQtdGC0LXRgNC90L7QtSA3NjAwMDA!5e0!3m2!1sru!2skg!4v1700000000000"
            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

