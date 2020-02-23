import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <React.Fragment>
      <div className="page__cta">
        <Link className="page__cta--button" to="/classes">
          Upcoming Classes
        </Link>
        <Link className="page__cta--button" to="/events">
          Upcoming Events
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
