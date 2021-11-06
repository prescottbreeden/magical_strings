import React, { Component } from 'react';
import UnderConstruction from '../components/UnderConstruction';

class HarpShop extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <section className="event">
          <h2 className="page__title">Harps and Dulcimers</h2>
          <UnderConstruction />
        </section>
      </React.Fragment>
    );
  }
}

export default HarpShop;
