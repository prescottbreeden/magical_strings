import React, { Component } from 'react';
import Hero from '../components/Hero';
import philip from './../assets/philip_harps_opt.jpg';
import data from '../constants/classes.json';

<p className="u-italic">10 minutes from Southworth ferry.</p>;
class Classes extends Component {
  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    const { classes, session } = data;
    console.log(session);
    return (
      <>
        <section className="event">
          <h2 className="event__title">School of Magical Strings</h2>
          <Hero photo={philip} alt="Philip Boulidng with Harps" />
          <div className="class">
            <h2 className="event__title">
              {classes.name} &#8212; {classes.term}
            </h2>
          </div>
          <div className="class__container">
            <div className="class">
              <div className="class__info">
                <h3 className="u-subtitle">When:</h3>
                <h3 className="u-subtitle">
                  {classes.start} &#8212; {classes.end}
                </h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Where:</h3>
                <h3 className="u-subtitle">{classes.where}</h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Duration:</h3>
                <h3 className="u-subtitle">{classes.duration}</h3>
              </div>
              <div className="class__info">
                <h3 className="u-subtitle">Fee:</h3>
                <h3 className="u-subtitle">
                  {classes.fee}
                  <span className="u-star">*</span>
                </h3>
              </div>
              <p className="u-italic">
                <span className="u-star">* </span>
                The class fee for the entire{' '}
                <span className="u-bold u-underline u-color-green">
                  six-week
                </span>{' '}
                term is {classes.fee}
              </p>
            </div>
            <div className="u-section-break--small" />
            <div className="class">
              {session.map((s, index) => (
                <div className="class__info class__info--class" key={index}>
                  <p className="class__title">{s.name}</p>
                  <p className="class__details">{s.when}</p>
                </div>
              ))}
              <div className="u-section-break--small" />
              {session.map((s, index) => (
                <React.Fragment key={index}>
                  <div className="class">
                    <h2>
                      <span className="class__title">{s.name}</span>
                    </h2>
                    <p>{s.description}</p>
                    <br />
                    <p>
                      <span className="class__title">
                        Tentative Repertoire:{' '}
                      </span>
                      Princess Augusta (Scottish), Blind John the Harper
                      (Welsh), Planxty Irwin (Irish, O’Carolan), Nora Criona
                      (Irish Jig)
                    </p>
                  </div>
                </React.Fragment>
              ))}
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
