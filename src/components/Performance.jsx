import React from 'react';

const Performance = ({
  date,
  location,
  googleMaps,
  ticketInfo,
  time,
  venue,
  ticketLink,
  callToAction,
}) => {
  const generateDate = (date, time) => {
    const when = new Date(Date.parse(date)).toDateString();
    return `${when} @ ${time}`;
  };
  return (
    <React.Fragment>
      <div className="performance">
        <div className="performance__group">
          <p>{location}</p>
          <p>{generateDate(date, time)}</p>
        </div>
        <div className="performance__details">
          <p className="performance__venue-details">
            {venue}
            {googleMaps && (
              <a className="performance--directions" href={googleMaps}>
                (map)
              </a>
            )}
          </p>
          <p className="performance__venue-details">{ticketInfo}</p>
        </div>
        {callToAction ? (
          <>
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
                  {callToAction}
                </a>
              )
            ) : (
              <p className="performance__ticket-link--outline performance--item">
                Coming Soon!
              </p>
            )}
          </>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Performance;
