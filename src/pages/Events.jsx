import React, { Component } from 'react';
import Event from '../components/Event';
import { stPatricks, yuleTide } from '../constants/performances';
import eventsPhoto from './../assets/ms_events_opt.jpg';
import Hero from '../components/Hero';

class Events extends Component {
  state = {
    events: [stPatricks, yuleTide],
  };

  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <h2 className="page__title">Events and Performances</h2>
        <Hero photo={eventsPhoto} alt="Pam and Philip Boulding" small />
        {this.state.events.map(event => (
          <>
            <Event
              key={event.key}
              title={event.title}
              description={event.description}
              performances={event.performances}
            />
            <div className="u-section-break" />
          </>
        ))}
      </>
    );
  }
}

export default Events;
