import React from 'react';
import Performance from './Performance';
import EventMedia from './EventMedia';
import { upcomingPerformance } from '../utilities/event.utils';

/**
 * Event Component - Displays information about an event including title, description, media, and performances.
 *
 * Props:
 * - `title` (string): The title of the event.
 * - `description` (string[]): An array of paragraphs describing the event.
 * - `images` (Object[]): Optional array of media objects with `src`, `alt`, and `caption`.
 * - `performances` (Object[]): An array of performance objects to be displayed. Each object should match the props expected by the `Performance` component.
 * - `performancesTitle` (string, optional): A custom title for the performances section. Defaults to "Performances" if not provided.
 */
const Event = ({
  title,
  description = [],
  images = [],
  performances = [],
  performancesTitle,
}) => {
  const performanceTitle = performancesTitle ?? 'Performances';
  const visiblePerformances = performances.filter(upcomingPerformance);

  return (
    <section className="event">
      <h2 className="event__title">{title}</h2>
      <EventMedia images={images} />
      {description.map((line, idx) => (
        <p style={{ margin: '2rem 0' }} key={idx}>
          {line}
        </p>
      ))}
      <div className="event__performances">
        <h3 className="event__performances-title">{performanceTitle}</h3>
        <p>All times are in PST (Pacific Standard Time)</p>
        <br />
        {visiblePerformances.length > 0 ? (
          visiblePerformances.map((performance, idx) => (
            <Performance key={idx} {...performance} />
          ))
        ) : (
          <p className="u-italic">Check back soon for performance listings.</p>
        )}
      </div>
      <div className="u-section-break" />
      <hr />
    </section>
  );
};

export default Event;
