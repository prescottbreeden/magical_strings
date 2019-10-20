import React from 'react';
import Performance from './Performance';
import haydo from './../assets/HaydnKlangspiel.jpg';
import jc from './../assets/JocelynColm.jpg';
import philip from './../assets/PhilipBlue.jpg';
import Video from './Video';

const Event = props => {
  const { title, description, performances } = props;
  return (
    <React.Fragment>
      <section className="event">
        <h2 className="event__title">{title}</h2>
        <div className="event__banner">
          <img
            className="event__img"
            src={philip}
            alt="Haydn playing the Klangspiel"
          />
          <img
            className="event__img"
            src={haydo}
            alt="Haydn playing the Klangspiel"
          />
          <img
            className="event__img"
            src={jc}
            alt="Haydn playing the Klangspiel"
          />
        </div>
        <p>{description}</p>
        <Video
          title="Magical Strings Dancers"
          src="https://www.youtube-nocookie.com/embed/Lf6eR4A0Xdg"
        />
        <div className="event__performances">
          <h3 className="event__performances-title">Upcoming Performances</h3>
          {performances &&
            performances.map((performance, idx) => {
              return <Performance key={idx} details={performance} />;
            })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Event;
