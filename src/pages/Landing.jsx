import React, { Component } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import groupPhoto from './../assets/MagicalStringsGroup.jpg';

class Landing extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Hero photo={groupPhoto} alt="Magical Strings Yuletide family" />
        <About />
        <CallToAction />
      </React.Fragment>
    );
  }
}

export default Landing;
