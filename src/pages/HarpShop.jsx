import React from 'react';
import { map } from 'ramda';
import { harps } from '../constants/harps';
import { Harp } from '../components/Harp';
import { Group, Row } from '../layouts';
import Hero from '../components/Hero';
import harps2 from './../assets/harps/harps2020_2.jpg';
import { formatMoney } from '../utilities';

const HarpShop = () => {
  return (
    <React.Fragment>
      <h2 className="event__title">Celtic Harps and Hammered Dulcimers</h2>
      <Hero photo={harps2} alt="Philip Boulidng with Harps" />
      <Row>
        <p>
          As a professional musician, teacher and instrument builder since 1971,
          I developed these harps for tone, playability, and economy over the
          course of many years of offering group lessons at my "School of
          Magical Strings". Our lap harps have a remarkably full and warm sound
          for their size. Their portability and value make them an excellent
          beginner's choice. Our large concert Celtic harps have a very warm,
          graceful and sonically gorgeous presence. The Concert Oladion harp is
          a 36-string, 5-octave harp based on the same construction as my
          Concert Oranmore, with all the sound for half the price! I am always
          open to suggestions and special requests.
        </p>
      </Row>
      {map(Harp, harps)}
      <h3>Materials</h3>
      <Row>
        <p>
          The woods used for these instruments are all maple, with a special
          maple laminate for the sound box. They are finished with oil varnish,
          hand rubbed to a soft, golden lustre. Cherry wood, or different
          colored stains can be used upon request for a minimal extra charge.
          Wire strings produce a bright, bell-like tone in the tradition of the
          ancient Irish and Scottish harps, while the more modern nylon strings
          produce a full, mellow resonance.
        </p>
      </Row>
      <h3>Ordering & Shipping</h3>
      <Row>
        <p>
          To order any instrument, a non-refundable deposit of $50.00 is
          required. An invoice will be sent, along with an estimated completion
          date. Lap harps are shipped via USPS priority, or UPS. Cost is
          typically between {formatMoney(75)} and {formatMoney(100)} to most
          places within the continental U.S. Shipping for concert harps varies,
          and will be arranged on an individual basis.
        </p>
      </Row>
      <h3>Sharping Levers</h3>
      <Row>
        <p>
          Brass flip-up levers made by Robinson's Harp Shop are used on the lap
          harp models (typically installed on the C-strings and F-strings for
          the three most common keys of C, G, and D). Loveland levers are used
          for the midsize and concert harp models. All levers are{' '}
          {formatMoney(15)} each, and any number of strings can be specified,
          from certain notes, to a fully levered harp. Levers can also be
          retro-fitted at any time; I can install them as you need them, for the
          convenience of those who live within driving distance of my studio!
        </p>
      </Row>
      <h3>Cases</h3>
      <Row>
        <p>
          Soft cases are made of durable blue cordura nylon, padded with dense
          foam and a soft inner lining. Each case includes a large inside pocket
          for accessories, heavy-duty zippers and webbing for handles, plus
          rings for attaching a shoulder strap (not included).
          <br />
        </p>
      </Row>
      <h3>Warranty</h3>
      <Row>
        <p>
          All instruments carry a two-year warranty against defects in materials
          and workmanship.
        </p>
      </Row>
      <h4>Contact Us for More information</h4>
    </React.Fragment>
  );
};

export default HarpShop;
