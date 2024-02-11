import React from 'react';
import equals from 'ramda/src/equals';
import cond from 'ramda/src/cond';
import otherwise from 'ramda/src/T';
import isNil from 'ramda/src/isNil';
import pipe from 'ramda/src/pipe';
import prop from 'ramda/src/prop';

/**
 * Generates a formatted string representing a date and time.
 * @param {string} date - The date in a format parseable by JavaScript's `Date.parse()`.
 * @param {string} time - The time as a string.
 * @returns {string} A formatted string combining the date and time.
 */
const generateDate = (date, time) => {
  const when = new Date(Date.parse(date)).toDateString();
  return `${when} @ ${time}`;
};

// Predicate functions for ticket link conditions

/**
 * Checks if the 'callToAction' prop is not provided.
 * @param {Object} props - Component props.
 * @returns {boolean} - True if 'callToAction' is not provided.
 */
const noCallToAction = pipe(prop('callToAction'), isNil);

/**
 * Checks if the 'ticketLink' prop is not provided.
 * @param {Object} props - Component props.
 * @returns {boolean} - True if 'ticketLink' is not provided.
 */
const noTicketLink = pipe(prop('ticketLink'), isNil);

/**
 * Checks if the 'ticketLink' prop has a value of 'special'.
 * @param {Object} props - Component props.
 * @returns {boolean} - True if 'ticketLink' is 'special'.
 */
const notAvailableOnline = pipe(prop('ticketLink'), equals('special'));

// --[ Components for different ticket states ]--------------------------------

/**
 * Component indicating that tickets are not available online.
 */
const NotAvailableOnline = () => (
  <p className="performance__ticket-link--outline performance--item">
    Not available online
  </p>
);

/**
 * Component rendering a ticket link or call to action text.
 * @param {Object} props - Component props.
 * @param {string} props.ticketLink - URL for the ticket link.
 * @param {string} props.callToAction - Call to action text.
 */
const TicketLink = ({ ticketLink, callToAction }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="performance__ticket-link performance--item"
    href={ticketLink}
  >
    {callToAction}
  </a>
);

/**
 * Component indicating that tickets are coming soon.
 */
const ComingSoon = () => (
  <p className="performance__ticket-link--outline performance--item">
    Coming Soon!
  </p>
);

// --[ Main call-to-action component ]-----------------------------------------

/**
 * Component rendering the appropriate call to action based on the provided props.
 * @param {Object} props - Component props.
 */
const CallToAction = cond([
  [noCallToAction, () => null],
  [noTicketLink, ComingSoon],
  [notAvailableOnline, NotAvailableOnline],
  [otherwise, TicketLink],
]);

/**
 * Displays ticket availability message
 *
 * @typedef {Object} AvailabilityProps
 * @property {boolean} fair - Indicates if the performance is part of a fair, implying different ticketing arrangements.
 * @property {boolean} soldout - Whether the performance is sold out.
 *
 * @param {AvailabilityProps} props - The props for the component.
 */
const Availability = props =>
  props.fair ? null : props.soldout ? (
    <p className="performance__soldout">Sold-out</p>
  ) : (
    <p className="performance__available">Tickets Available</p>
  );

/**
 * Displays information about a performance event including location, date, time, and ticket details.
 *
 * @typedef {Object} PerformanceProps
 * @property {boolean} fair - Indicates if the performance is part of a fair, implying different ticketing arrangements.
 * @property {boolean} soldout - Whether the performance is sold out.
 * @property {string} date - The performance date in a format parseable by JavaScript's `Date` object.
 * @property {string} location - The performance's location.
 * @property {string} ticketInfo - Additional ticket information, like pricing or notes.
 * @property {string} time - The start time of the performance.
 * @property {string} venue - The hosting venue's name.
 * @property {string} [googleMaps] - An optional URL to the venue's location on Google Maps.
 * @property {string} [ticketLink] - An optional URL for ticket purchases. A value of 'special' signifies that tickets are not available online.
 *
 * @param {PerformanceProps} props - The props for the component.
 */
const Performance = props => {
  const date = generateDate(props.date, props.time);

  return (
    <>
      <div className="performance">
        <div className="performance__group">
          <p className="performance__location">{props.location}</p>
          <p className="performance__date">{date}</p>
        </div>
        <div className="performance__details">
          <p className="performance__venue-details">
            {props.venue}
            {props.googleMaps && (
              <a
                className="performance--directions"
                href={props.googleMaps}
                rel="noopener noreferrer"
                target="_blank"
              >
                (map)
              </a>
            )}
          </p>
          <p className="performance__venue-details">{props.ticketInfo}</p>
          {props.showAvailability && props.ticketLink && (
            <Availability fair={props.fair} soldout={props.soldout} />
          )}
        </div>
        <CallToAction {...props} />
      </div>
    </>
  );
};

export default Performance;
