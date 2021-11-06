import * as R from 'ramda';
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import philip from './../assets/philip_harps_opt.jpg';
import classData from '../constants/classes.json';

<p className="u-italic">10 minutes from Southworth ferry.</p>;
const Classes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cdata = R.prop(R.__, classData);
  const general = R.prop(R.__, cdata('generalClassInfo'));

  return (
    <>
      <section className="event">
        <h2 className="page__title">School of Magical Strings</h2>
        <Hero photo={philip} alt="Philip Boulidng with Harps" />
        <div className="class">
          <h2 className="page__title">
            {general('name')} &#8212; {general('term')}
          </h2>
        </div>
        <div className="class__container">
          <div className="class">
            <div className="class__info">
              <h3 className="u-subtitle">When:</h3>
              <h3 className="u-subtitle">
                {general('start')} &#8212; {general('end')}
              </h3>
            </div>
            <div className="class__info">
              <h3 className="u-subtitle">Where:</h3>
              <h3 className="u-subtitle">{general('where')}</h3>
            </div>
            <div className="class__info">
              <h3 className="u-subtitle">Duration:</h3>
              <h3 className="u-subtitle">{general('duration')}</h3>
            </div>
            <div className="class__info">
              <h3 className="u-subtitle">Fee:</h3>
              <h3 className="u-subtitle">{general('fee')}</h3>
            </div>
          </div>
          <div className="u-section-break--small" />
          <div className="class">
            {general('description') &&
              general('description').map((s, index) => (
                <div className="class__description" key={index}>
                  <p className="class__details">{s}</p>
                </div>
              ))}
          </div>
          <div className="class">
            {cdata('session') &&
              cdata('session').map((s, index) => (
                <div className="class__info class__info--class" key={index}>
                  <p className="class__title">{s.name}</p>
                  <p className="class__details">{s.when}</p>
                </div>
              ))}
            <div className="u-section-break--small" />
            {cdata('session') &&
              cdata('session').map((s, index) => (
                <React.Fragment key={index}>
                  <div className="class">
                    <h2>
                      <span className="class__title">{s.name}</span>
                    </h2>
                    <p>{s.description}</p>
                    <br />
                    {s.repretoire.length > 0 ? (
                      <p>
                        <span className="class__title">
                          Tentative Repertoire:{' '}
                        </span>
                        {s.repretoire.map(R.prop('name')).join(', ') + '.'}
                      </p>
                    ) : null}
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
};

export default Classes;
