import React, { Component } from 'react';
import Hero from '../components/Hero';

class Landing extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Hero />
        Landing page...
      </React.Fragment>
    );
  }
}

export default Landing;
