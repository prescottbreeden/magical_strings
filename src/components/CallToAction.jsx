import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <React.Fragment>
      <div className="page__cta">
        <Link className="page__cta--button" to="/events">
          Upcoming Events
        </Link>
        <a
          rel="noreferrer"
          target="_blank"
          className="page__cta--button"
          href="https://www.facebook.com/MagicalStrings"
        >
          Visit us on Facebook
        </a>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
