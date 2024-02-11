import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders the primary call to action buttons from the landing page
 */
const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
