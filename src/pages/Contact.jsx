import Hero from '../components/Hero';
import PP from '../assets/ms_events.jpg';
import React from 'react';

const Contact = props => {
  return (
    <>
      <section className="event">
        <h2 className="page__title">Contact Us</h2>
        <div className="performance u-padding">
          <p className="contact__info">
            <a href="tel:2538573716">(253) 857-3716</a>
          </p>
          <p className="contact__info">
            <a href="mailto: info@magicalstrings.com">
              info@magicalstrings.com
            </a>
          </p>
        </div>
        <div className="contact__hero">
          <Hero photo={PP} small />
        </div>
      </section>
    </>
  );
};

export default Contact;
