import React, { Component } from 'react';
import UnderConstruction from '../components/UnderConstruction';
import Hero from '../components/Hero';
import philip from './../assets/philip_harps_opt.jpg';
import CallToAction from '../components/CallToAction';
import { Link } from 'react-router-dom';
// <UnderConstruction />
// <div className="class__info">
//   <h3 className="u-subtitle">Directions:</h3>
//   <h3 className="u-subtitle">
//     <a target="blank" href="https://goo.gl/maps/DVptMXnccQjYwLTR6">
//       Google Maps
//     </a>
//   </h3>
// </div>
<p className="u-italic">10 minutes from Southworth ferry.</p>;
class Classes extends Component {
  // componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <section className="event">
          <h2 className="event__title">School of Magical Strings</h2>
          <Hero photo={philip} alt="Philip Boulidng with Harps" />
          <div className="class">
            <h2 className="event__title">
              Virtual Harp Classes &#8212; Winter Term 2021
            </h2>
          </div>
          <div className="class__container">
            <div className="class">
              <div className="class__info">
                <h3 className="u-subtitle">When:</h3>
                <h3 className="u-subtitle">January 26th &#8212; March 2nd</h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Where:</h3>
                <h3 className="u-subtitle">Virtually on Zoom</h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Duration:</h3>
                <h3 className="u-subtitle">1 hr/week (6 weeks)</h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Fee:</h3>
                <h3 className="u-subtitle">
                  $175
                  <span className="u-star">*</span>
                </h3>
              </div>
              <p className="u-italic">
                <span className="u-star">* </span>
                The class fee for the entire{' '}
                <span className="u-bold u-underline u-color-green">
                  six-week
                </span>{' '}
                term is $175.
              </p>
            </div>
            <div className="u-section-break--small" />
            <div className="class">
              <div className="class__info class__info--class">
                <p className="class__title">Beginning Intermediate</p>
                <p className="class__details">Tuesdays, 5:00 - 6:00pm</p>
              </div>
              <div className="class__info class__info--class">
                <p className="class__title">Advanced Intermediate</p>
                <p className="class__details">Tuesdays, 6:15 - 7:15pm</p>
              </div>
              <div className="class__info class__info--class">
                <p className="class__title">Beginner</p>
                <p className="class__details">Tuesdays, 7:30 - 9:00pm</p>
              </div>
            </div>
            <div className="u-section-break--small" />
            <div className="class">
              <h2>
                <span className="class__title">
                  Beginning Intermediate @ 5:00pm
                </span>
              </h2>
              <p>
                For students who have either been through my beginner course
                (and know the first two Welsh tunes), or anyone with a working
                knowledge of the harp, and knows how to play a few pieces (or
                more) with both hands.
              </p>
              <br />
              <p>
                <span className="class__title">Tentative Repertoire: </span>
                Princess Augusta (Scottish), Blind John the Harper (Welsh),
                Planxty Irwin (Irish, O’Carolan), Nora Criona (Irish Jig)
              </p>
            </div>
            <div className="class">
              <h2>
                <span className="class__title">
                  Advanced Intermediate @ 6:15pm
                </span>
              </h2>
              <p>
                For students with more extensive experience, bigger repertoire,
                but perhaps not ready to call themselves ‘advanced’ – This class
                will basically be a continuation of the Fall Term intermediate
                class, which repertoire included Lullaby for Elise, Barbara’s
                Cottage-jig, Bridget Cruise Air #1 (Carolan), Where Dragons
                Dance (PB original, Celtic/jazz influences) along with a few
                holiday pieces.
              </p>
              <br />
              <p>
                <span className="class__title">Tentative Repertoire: </span>
                Bridget Cruise Airs #2 and #3, Dragons Dance (continued, with
                lever changes), Garton Mother’s Lullaby (Irish), Warm Island
                (Hawaiian slack-key style, with guitar-like techniques and
                ornamentation), Queen of the Rushes (Irish jig with
                ornamentation).
              </p>
            </div>
            <div className="class">
              <h2>
                <span className="class__title">Beginner @ 7:30pm</span>
              </h2>
              <p>
                For students picking up a harp for the first time (or those who
                want to review!) – this class will take you from the ground up;
                holding the harp, hand position, and the first fingering
                exercises with scales and arpeggios. You will learn the first
                two Welsh harp tunes, which will give you all the fundamentals
                of harp playing you will need for the rest of your musical life!
              </p>
            </div>
            <div className="u-section-break" />
            <h2 className="event__title">Additional Details</h2>
            <div className="class">
              <p>
                <span className="class__title">Students may register </span>
                by simply sending an email to{' '}
                <a href="mailto:info@magicalstrings.com">
                  info@magicalstrings.com
                </a>
                . Payments can be made by sending a check to Magical Strings, PO
                Box 1240, Olalla, WA 98359, or by credit card via
                www.paypal.me/magicalstrings.
              </p>
            </div>
            <div className="class">
              <p>
                <span className="class__title">When you register, </span>
                please specify your level preference. Upon payment, students
                will be sent the zoom invitation, and a Welcome email letter
                with class details, zoom class structure and protocol, and music
                notation (although instruction focuses largely on learning by
                ear). Philip will teach from his Magic Hill Studio in Olalla,
                WA.
              </p>
            </div>
            <div className="class">
              <p>
                <span className="class__title">Harp rentals </span>
                are available for local beginners who wish to rent a harp with
                option to purchase. Rental cost is $80 for the 6 weeks. If
                interested, please inquire and let us know ASAP – pickup will be
                scheduled at the shop.
              </p>
            </div>
            <div className="class">
              <p>
                <span className="class__title">Repertoire and exercises </span>
                for all classes will be given at a level appropriate for each
                student's proficiency to help develop technique and strengthen
                the fingers. The intermediate repertoire given is tentative, as
                I often have returning students and ask for feedback on their
                needs and wishes, with hopes of avoiding duplication of pieces
                they may have already learned. Each piece learned will not only
                add to your variety of repertoire, but help increase your
                technical ability and musical understanding. Know also that each
                piece will be enhanced with ideas for embellishment, variation,
                and dynamics; this is a living tradition that lends itself well
                to personal expression and exploration!
              </p>
            </div>
          </div>
        </section>
        <div className="u-section-break" />

        <div className="page__cta">
          <a
            rel="noreferrer"
            target="_blank"
            className="page__cta--button"
            href="mailto:info@magicalstrings.com?subject=Class Inquiry from Website"
          >
            Contact Us!
          </a>
        </div>
      </>
    );
  }
}

export default Classes;
