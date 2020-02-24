import React from 'react';
import contactPhoto from '../assets/edited/finale_banner.jpg';
import Hero from '../components/Hero';

const Contact = props => {
  return (
    <>
      <h2 className="event__title">Contact Us</h2>
      <div className="performance u-padding">
        <p className="event__performances-title">Phone: 253 857-3716</p>
        <p className="event__performances-title">
          Email: info [at] magicalstrings.com
        </p>
      </div>
      <Hero photo={contactPhoto} alt="Magical Strings" />
    </>
  );
};

export default Contact;
