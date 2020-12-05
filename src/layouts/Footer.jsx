import React from 'react';
import FooterLogo from '../components/FooterLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <FooterLogo />
      <div style={{ height: '2rem' }} />
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="45YXNQEGKXVCS" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
      <div className="footer__container">
        <p className="footer__text">The Joy of Celtic Music</p>
        <p className="footer__text">
          Magical Strings &copy; 1978-{currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
