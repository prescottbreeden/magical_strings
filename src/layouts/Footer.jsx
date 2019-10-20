import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className="footer">
      <div>
        <Link to="/">Promotional Materials</Link>
      </div>
      <Link
        href="http://www.facebook.com/pages/Magical-Strings/179987836057"
        target="blank"
      >
        Find us on Facebook
        {/* <img src="assets/facebook_logo_sm.jpg"
          align="center" width="200" height="60" alt="Find us on Facebook"/> */}
      </Link>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="WYVHZPYMJ2YU4" />
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
    </footer>
  );
};

export default Footer;
