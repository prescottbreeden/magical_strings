import React from 'react';
import Performance from './Performance';
import { upcomingPerformance } from '../utilities/event.utils';

/**
 * Event Component - Displays information about an event including title, description, and performances.
 *
 * Props:
 * - `title` (string): The title of the event.
 * - `description` (string[]): An array of paragraphs describing the event.
 * - `performances` (Object[]): An array of performance objects to be displayed. Each object should match the props expected by the `Performance` component.
 * - `performancesTitle` (string, optional): A custom title for the performances section. Defaults to "Performances" if not provided.
 * - `key` (string, optional): A unique key for React list rendering optimization. It's recommended to provide this when rendering multiple `Event` components to ensure efficient updates.
 *
 * @param {Object} props - The props for the component.
 */
const Event = props => {
  const performanceTitle = props.performancesTitle
    ? props.performancesTitle
    : 'Performances';

  return (
    <React.Fragment key={props.key}>
      <section className="event">
        <h2 className="event__title">{props.title}</h2>
        {props.description.map((d, i) => (
          <p style={{ margin: '2rem 0' }} key={i}>
            {d}
          </p>
        ))}
        <div className="event__performances">
          <h3 className="event__performances-title">{performanceTitle}</h3>
          <p className="">All times are in PST (Pacific Standard Time)</p>
          <br />
          {props.performances && props.performances.length > 0 ? (
            props.performances
              .filter(upcomingPerformance)
              .map((performance, idx) => {
                return <Performance key={idx} {...performance} />;
              })
          ) : (
            <p className="u-italic">
              Check back soon for performance listings.
            </p>
          )}
        </div>
        <div className="u-section-break" />
        <hr />
      </section>
    </React.Fragment>
  );
};

export default Event;
