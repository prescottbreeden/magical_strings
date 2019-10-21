import React, { Component } from 'react';
import Event from '../components/Event';
import { yuleTide } from '../constants/performances';

class Events extends Component {
  state = {
    events: [yuleTide],
  };

  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <React.Fragment>
        <div ref={this.myRef}></div>
        {this.state.events.map(event => (
          <Event
            key={event.key}
            title={event.title}
            description={event.description}
            performances={event.performances}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Events;
