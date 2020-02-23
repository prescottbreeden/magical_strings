import React from 'react';

const Performance = props => {
  const { venue, program, date, time, ticketLink, details } = props.details;

  const generateDate = (date, time) => {
    const when = new Date(Date.parse(date)).toDateString();
    return `${when} @ ${time}`;
  };
  return (
    <React.Fragment>
      <div className="performance">
        <div className="performance__group">
          <p>{details.location}</p>
          <p>{generateDate(date, time)}</p>
        </div>
        <div className="performance__group performance__details">
          <p>
            {venue}
            <a className="performance--directions" href={details.googleMaps}>
              (map)
            </a>
          </p>
          <p className="performance__venue-details">{details.ticketInfo}</p>
        </div>
        {ticketLink ? (
          ticketLink === 'special' ? (
            <p className="performance__ticket-link--outline performance--item">
              Not available online
            </p>
          ) : (
            <a
              target="blank"
              className="performance__ticket-link performance--item"
              href={ticketLink}
            >
              Get Tickets!
            </a>
          )
        ) : (
          <p className="performance__ticket-link--outline performance--item">
            Coming Soon!
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Performance;
