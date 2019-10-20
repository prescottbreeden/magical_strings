import React, { Component } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Upcoming from '../components/UpComming';
import CallToAction from '../components/CallToAction';

class Landing extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Hero />
        <About />
        <CallToAction />
      </React.Fragment>
    );
  }
}

export default Landing;
