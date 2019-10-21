import React from 'react';
import groupPhoto from './../assets/MagicalStringsGroup.jpg';

const Hero = props => {
  return (
    <React.Fragment>
      <img
        className="hero__img"
        src={groupPhoto}
        alt="Magical Strings Celtic Yuletide"
      />
    </React.Fragment>
  );
};

export default Hero;
