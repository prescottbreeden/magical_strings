import React from 'react';

const Performance = props => {
  const { venue, program, date, time, ticketLink } = props.details;

  const generateDate = (date, time) => {
    const when = new Date(Date.parse(date)).toDateString();
    return `${when} @ ${time}`;
  };
  return (
    <React.Fragment>
      <div className="performance">
        <p className="performance__date-time performance--container">
          {generateDate(date, time)}
        </p>
        <p className="performance__venue performance--container">{venue}</p>
        {ticketLink ? (
          <a
            target="blank"
            className="performance__ticket-link performance--container"
            href={ticketLink}
          >
            Get Tickets!
          </a>
        ) : (
          <p className="performance__ticket-link performance--container">
            Coming Soon!
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Performance;
