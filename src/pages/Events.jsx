import React, { useEffect } from 'react';
import eventsPhoto from './../assets/ms_events_opt.jpg';
import Hero from '../components/Hero';
import Event from '../components/Event';
import { ThreeRivers, yuleTide } from '../constants/performances';
import { map } from 'ramda';

const Events = () => {
  const events = [ThreeRivers, yuleTide];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <section className="event">
        <h2 className="event__title">Upcomming Events and Performances</h2>
        <Hero photo={eventsPhoto} alt="Pam and Philip Boulding" small />
        {map(Event, events)}
      </section>
    </React.Fragment>
  );
};

export default Events;
