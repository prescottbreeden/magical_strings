import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <React.Fragment>
      <div className="page__cta">
        <Link className="page__cta--button" to="/events">
          Events
        </Link>
        <a
          rel="noreferrer"
          target="_blank"
          className="page__cta--button"
          href="https://www.youtube.com/c/MagicalStrings-harp/featured"
        >
          Youtube
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="page__cta--button"
          href="https://www.facebook.com/MagicalStrings"
        >
          Facebook
        </a>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
