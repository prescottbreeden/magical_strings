import React from 'react';
import contactPhoto from '../assets/edited/finale_banner.jpg';
import Hero from '../components/Hero';

const Contact = props => {
  return (
    <>
      <h2 className="event__title">Contact Us</h2>
      <div className="performance u-padding">
        <p className="contact__info">
          <a href="tel:2538573716">(253) 857-3716</a>
        </p>
        <p className="contact__info">
          <a href="mailto: info@magicalstrings.com">info@magicalstrings.com</a>
        </p>
      </div>
      <Hero photo={contactPhoto} alt="Magical Strings" />
    </>
  );
};

export default Contact;
