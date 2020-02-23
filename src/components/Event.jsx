import React from 'react';
import Performance from './Performance';

const Event = props => {
  const { title, description, performances } = props;
  return (
    <>
      <section className="event">
        <h2 className="event__title">{title}</h2>
        <p>{description}</p>
        <div className="event__performances">
          <h3 className="event__performances-title">Upcoming Performances</h3>
          {performances && performances.length > 1
            ? performances.map((performance, idx) => {
                return <Performance key={idx} details={performance} />;
              })
            : 'Check back soon for performance listings.'}
        </div>
      </section>
    </>
  );
};

export default Event;
