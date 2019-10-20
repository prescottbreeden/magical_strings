import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = props => {
  return (
    <React.Fragment>
      <div className="page__cta">
        <Link className="page__cta--button" to="/events">
          Join us at Celtic Yuletide 2019!
        </Link>
      </div>
    </React.Fragment>
  );
};

export default CallToAction;
