import React from 'react';

const Performance = ({
  callToAction,
  date,
  googleMaps,
  location,
  soldout,
  ticketInfo,
  ticketLink,
  time,
  venue,
}) => {
  const generateDate = (date, time) => {
    const when = new Date(Date.parse(date)).toDateString();
    return `${when} @ ${time}`;
  };
  const renderCallToAction = () => {
    if (new Date(date) < Date.now()) {
      return (
        <p className="performance__ticket-link--outline performance--item">
          N / A
        </p>
      );
    }
    return callToAction ? (
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
    ) : null;
  };

  const Availability = () =>
    soldout ? (
      <p className="performance__soldout">Sold-out</p>
    ) : (
      <p className="performance__available">Tickets Available</p>
    );

  return (
    <React.Fragment>
      <div className="performance">
        <div className="performance__group">
          <p className="performance__location">{location}</p>
          <p className="performance__date">{generateDate(date, time)}</p>
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
          {ticketLink && <Availability />}
        </div>
        {renderCallToAction()}
      </div>
    </React.Fragment>
  );
};

export default Performance;
