import * as R from 'ramda';
import Event from '../components/Event';
import React, { useState } from 'react';
import {
  filterPastEvents,
  filterUpcomingEvents,
} from '../utilities/event.utils';
import Hero from '../components/Hero';
import eventsPhoto from './../assets/Yuletide2021.png';
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

  // removed for cleanliness
  const UpcomingEvents = () => (
    <button
      className={`filter__button--${getModifiier(upcomingFilter)}`}
      onClick={setUpcomingEvents}
    >
      Upcoming Events
    </button>
  );

  // removed for cleanliness
  const PastEvents = () => (
    <button
      className={`filter__button--${getModifiier(!upcomingFilter)}`}
      onClick={setPastEvents}
    >
      Past Events
    </button>
  );

  return (
    <React.Fragment>
      <section className="event">
        <h2 className="page__title">Events & Tickets</h2>
        <Hero
          photo={eventsPhoto}
          alt="Magical Strings band memebers at Yuletide in Leavenworth"
        />
        <div className="u-section-break--small" />
        <div className="covid">
          <h2 className="covid__title">Safety Update</h2>
          <p className="covid__description">
            Magical Strings is committed to providing a safe and comfortable
            concert experience. Please be sure to check COVID-19 vaccination,
            exemption, and masking requirements at the venue you plan to attend.
            We look forward to seeing you!
          </p>
        </div>
        <div className="u-section-break--small" />
        <div className="event__container">{computedEvents}</div>
      </section>
    </React.Fragment>
  );
};

export default Events;
