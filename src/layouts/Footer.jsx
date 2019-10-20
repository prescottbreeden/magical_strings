import React from 'react';
import FooterLogo from '../components/FooterLogo';

const Footer = props => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <FooterLogo />
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
