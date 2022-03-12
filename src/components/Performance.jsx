import React from 'react';
import equals from 'ramda/src/equals';
import cond from 'ramda/src/cond';
import otherwise from 'ramda/src/T';
import isNil from 'ramda/src/isNil';

const generateDate = (date, time) => {
  const when = new Date(Date.parse(date)).toDateString();
  return `${when} @ ${time}`;
};

const Performance = props => {
  const {
    callToAction,
    date,
    fair,
    googleMaps,
    location,
    soldout,
    ticketInfo,
    ticketLink,
    time,
    venue,
  } = props;

  // --[ JSX ]-----------------------------------------------------------------
  const NotAvailableOnline = () => (
    <p className="performance__ticket-link--outline performance--item">
      Not available online
    </p>
  );

  const TicketLink = () => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="performance__ticket-link performance--item"
      href={ticketLink}
    >
      {callToAction}
    </a>
  );

  const ComingSoon = () => (
    <p className="performance__ticket-link--outline performance--item">
      Coming Soon!
    </p>
  );

  const CallToAction = () => {
    const createTicketLink = cond([
      [isNil, () => <ComingSoon />],
      [equals('special'), () => <NotAvailableOnline />],
      [otherwise, () => <TicketLink />],
    ]);

    return callToAction ? createTicketLink(ticketLink) : null;
  };

  const Availability = () =>
    fair ? null : soldout ? (
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="performance--directions"
                href={googleMaps}
              >
                (map)
              </a>
            )}
          </p>
          <p className="performance__venue-details">{ticketInfo}</p>
          {ticketLink && <Availability />}
        </div>
        <CallToAction />
      </div>
    </React.Fragment>
  );
};

export default Performance;
