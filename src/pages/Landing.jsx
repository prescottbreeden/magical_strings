import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import groupPhoto from './../assets/MagicalStringsGroup_opt.jpg';

const Landing = () => {
  return (
    <React.Fragment>
      <Hero photo={groupPhoto} alt="Magical Strings Yuletide family" />
      <About />
      <CallToAction />
    </React.Fragment>
  );
};

export default Landing;
