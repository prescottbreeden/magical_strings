import React, { Component } from 'react';
import Hero from '../components/Hero';
import philip from './../assets/philip_harps_opt.jpg';

class Classes extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <section className="event">
          <h2 className="event__title">School of Magical Strings</h2>
          <Hero photo={philip} alt="Philip Boulidng with Harps" />
        </section>
        <div className="class">
          <h2 className="event__title">
            Beginning and Intermediate Classes in Celtic Harp
          </h2>
        </div>
        <div className="class__container">
          <div className="class">
            <div className="class__info">
              <h3 className="u-subtitle">When:</h3>
              <h3 className="u-subtitle">February 25th &#8212; March 24th</h3>
            </div>
            <div className="class__info">
              <h3 className="u-subtitle">Where:</h3>
              <h3 className="u-subtitle">Olalla, WA</h3>
            </div>
            <div className="class__info">
              <h3 className="u-subtitle">Directions:</h3>
              <h3 className="u-subtitle">
                <a target="blank" href="https://goo.gl/maps/DVptMXnccQjYwLTR6">
                  Google Maps
                </a>
              </h3>
            </div>
            <p className="u-italic">10 minutes from Southworth ferry.</p>
          </div>
          <div className="u-section-break--small" />
          <div className="class">
            <div className="class__info class__info--class">
              <p className="class__title">Beginning Harp</p>
              <p className="class__details">Tuesdays, 6:00 - 7:30pm</p>
            </div>
            <div className="class__info class__info--class">
              <p className="class__title">Intermediate Harp</p>
              <p className="class__details">Tuesdays, 7:30 - 9:00pm</p>
            </div>
            <p className="u-italic">Classes meet once a week for 5 weeks.</p>
          </div>
          <div className="u-section-break" />
          <h2 className="event__title">Additional Details</h2>
          <div className="class">
            <p>
              <span className="class__title">
                The School of Magical Strings{' '}
              </span>
              is offering a five-week term with classes for beginning and
              intermediate Celtic harp. The method of instruction is based on
              learning by ear, with basic music theory developed as the courses
              progress. Even students with no prior musical training will find
              this direct approach a refreshing and enjoyable experience as they
              learn captivating melodies from the Celtic tradition.
            </p>
          </div>
          <div className="class">
            <p>
              <span className="class__title">Classes in Olalla </span>
              are centrally located within 35 minutes from Tacoma and Gig Harbor
              to Bremerton and Silverdale, and a simple ferry ride from Vashon
              or West Seattle to the home studio of Magical Strings! Those
              interested in hammered dulcimer lessons can contact us for private
              instruction at the studio, $75 per hour. Private harp lessons are
              available as well.
            </p>
          </div>
          <div className="class">
            <p>
              <span className="class__title">Affordable instruments </span>
              hand-crafted by Magical Strings are available for rent or
              purchase. The harps are designed for a full, clear resonance, and
              are available with either wire strings (in the tradition of the
              ancient Irish and Scottish harps) or with the more common nylon
              strings. Rental harps are available for the period of the classes,
              and the rental cost can be applied toward the purchase of a new
              instrument (decision required by the last class).
            </p>
          </div>
        </div>
        <div className="u-section-break" />
      </>
    );
  }
}

export default Classes;
