import React from 'react';

const Hero = props => {
  const { photo, alt } = props;
  return (
    <React.Fragment>
      <img className="hero__img" src={photo} alt={alt} />
    </React.Fragment>
  );
};

export default Hero;
