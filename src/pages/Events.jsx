import React, { Component } from 'react';
import Event from '../components/Event';
import { stPatricks, yuleTide } from '../constants/performances';
import eventsPhoto from './../assets/ms_events.bmp';
import Hero from '../components/Hero';

class Events extends Component {
  state = {
    events: [stPatricks, yuleTide],
  };

  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <React.Fragment>
        <div ref={this.myRef}></div>
        <section className="event">
          <h2 className="event__title">Upcomming Events and Performances</h2>
          <Hero photo={eventsPhoto} alt="Pam and Philip Boulding" />
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
        </section>
      </React.Fragment>
    );
  }
}

export default Events;
