import * as R from 'ramda';
import Event from '../components/Event';
import React, { useState } from 'react';
import {
  filterPastEvents,
  filterUpcomingEvents,
} from '../utilities/event.utils';
import Hero from '../components/Hero';
import eventsPhoto from './../assets/ms_events_opt.jpg';
import { eventData } from './../constants/events.json';

const Events = () => {
  // -- local state --
  const [upcomingFilter, setUpcomingFilter] = useState(true);
  const [events, setEvents] = useState(() => filterUpcomingEvents(eventData));

  // setUpcomingEvents :: () -> unit
  const setUpcomingEvents = () => {
    R.pipe(filterUpcomingEvents, setEvents)(eventData);
    setUpcomingFilter(true);
  };

  // setUpcomingEvents :: () -> unit
  const setPastEvents = () => {
    R.pipe(filterPastEvents, setEvents)(eventData);
    setUpcomingFilter(false);
  };

  // computedEvents = Event[] | <p>
  const computedEvents =
    events.length > 0 ? (
      R.map(Event, events)
    ) : (
      <p className="u-no-data">
        There are no upcoming events. Please check back soon for updates!
      </p>
    );

  const getModifiier = bool => (bool ? 'selected' : 'outline');

  return (
    <React.Fragment>
      <section className="event">
        <h2 className="event__title">Events and Performances</h2>
        <Hero photo={eventsPhoto} alt="Pam and Philip Boulding" small />
        <div className="filter">
          <button
            className={`filter__button--${getModifiier(upcomingFilter)}`}
            onClick={setUpcomingEvents}
          >
            Upcoming Events
          </button>
          <button
            className={`filter__button--${getModifiier(!upcomingFilter)}`}
            onClick={setPastEvents}
          >
            Past Events
          </button>
        </div>
        <div className="u-section-break" />
        <div className="event__container">{computedEvents}</div>
      </section>
    </React.Fragment>
  );
};

export default Events;
