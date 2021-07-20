import React from 'react';
import Performance from './Performance';

const Event = props => {
  const { title, description, performances, key } = props;
  return (
    <React.Fragment key={key}>
      <section className="event">
        <h2 className="event__title">{title}</h2>
        {description.map((d, i) => (
          <p style={{ marginBottom: '1rem' }} key={i}>
            {d}
          </p>
        ))}
        <div className="event__performances">
          <h3 className="event__performances-title">Performances</h3>
          {performances && performances.length > 0 ? (
            performances.map((performance, idx) => {
              return <Performance key={idx} {...performance} />;
            })
          ) : (
            <p className="u-italic">
              Check back soon for performance listings.
            </p>
          )}
        </div>
        <p className="u-italic">
          * All times are in PST (Pacific Standard Time)
        </p>
        <div className="u-section-break" />
        <hr />
      </section>
    </React.Fragment>
  );
};

export default Event;
