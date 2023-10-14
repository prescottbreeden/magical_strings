import React from 'react';
import equals from 'ramda/src/equals';
import cond from 'ramda/src/cond';
import otherwise from 'ramda/src/T';
import isNil from 'ramda/src/isNil';
import pipe from 'ramda/src/pipe';
import prop from 'ramda/src/prop';

const generateDate = (date, time) => {
  const when = new Date(Date.parse(date)).toDateString();
  return `${when} @ ${time}`;
};

const noCallToAction = pipe(prop('callToAction'), isNil);
const noTicketLink = pipe(prop('ticketLink'), isNil);
const notAvailableOnline = pipe(prop('ticketLink'), equals('special'));

const NotAvailableOnline = () => (
  <p className="performance__ticket-link--outline performance--item">
    Not available online
  </p>
);

const TicketLink = ({ ticketLink, callToAction }) =>
  ticketLink ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="performance__ticket-link performance--item"
      href={ticketLink}
    >
      {callToAction}
    </a>
  ) : (
    <p className="performance__ticket-link performance--item">{callToAction}</p>
  );

const ComingSoon = () => (
  <p className="performance__ticket-link--outline performance--item">
    Coming Soon!
  </p>
);

const CallToAction = cond([
  [noCallToAction, () => null],
  [noTicketLink, ComingSoon],
  [notAvailableOnline, NotAvailableOnline],
  [otherwise, TicketLink],
]);

const Performance = props => {
  const {
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
        <CallToAction {...props} />
      </div>
    </React.Fragment>
  );
};

export default Performance;
