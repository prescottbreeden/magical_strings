import React from 'react';

const Hero = props => {
  const { photo, alt, small } = props;
  return (
    <div className="hero">
      {small ? (
        <img className="hero__img hero__img--small" src={photo} alt={alt} />
      ) : (
        <img className="hero__img" src={photo} alt={alt} />
      )}
    </div>
  );
};

export default Hero;
