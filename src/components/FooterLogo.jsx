import React from 'react';
import logo from './../assets/MSLogo_Lg.gif';

const FooterLogo = props => {
  return (
    <React.Fragment>
      <img src={logo} alt="Magical Strings logo" className="footer__logo" />
    </React.Fragment>
  );
};

export default FooterLogo;
