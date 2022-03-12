import React from 'react';
import Performance from './Performance';
import { upcomingPerformance } from '../utilities/event.utils';

const Event = props => {
  const { title, description, performances, key } = props;

  const alternateTitle = props.performancesTitle
    ? props.performancesTitle
    : 'Performances';

  return (
    <React.Fragment key={key}>
      <section className="event">
        <h2 className="event__title">{title}</h2>
        {description.map((d, i) => (
          <p style={{ margin: '2rem 0' }} key={i}>
            {d}
          </p>
        ))}
        <div className="event__performances">
          <h3 className="event__performances-title">{alternateTitle}</h3>
          <p className="">All times are in PST (Pacific Standard Time)</p>
          <br />
          {performances && performances.length > 0 ? (
            performances.filter(upcomingPerformance).map((performance, idx) => {
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
