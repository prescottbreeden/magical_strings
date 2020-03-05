import React, { Component } from 'react';
import Hero from '../components/Hero';
import philip from './../assets/philip_harps_opt.jpg';

class HarpShop extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <h2 className="page__title">Instruments</h2>
        <Hero photo={philip} alt="Philip Boulidng with Harps" />
        <h2 className="event__title">Celtic Harps and Hammered Dulcimers</h2>
        <p>
          As a professional musician, teacher and instrument builder since 1971,
          I developed these harps for tone, playability, and economy over the
          course of many years of offering group lessons at my &quot;School of
          Magical Strings&quot;. Our lap harps have a remarkably full and warm
          sound for their size. Their portability and value make them an
          excellent beginner's choice. Our large concert Celtic harps have a
          very warm, graceful and sonically gorgeous presence. The Concert
          Oladion harp is a 36-string, 5-octave harp based on the same
          construction as my Concert Oranmore, with all the sound for half the
          price! I am always open to suggestions and special requests.
        </p>
        <hr />
        <h3>Materials</h3>
        <p>
          The woods used for these instruments are all maple, with a special
          maple laminate for the sound box. They are finished with oil varnish,
          hand rubbed to a soft, golden lustre. Cherry wood, or different
          colored stains can be used upon request, for a minimal extra charge.
          Wire strings produce a bright, bell-like tone in the tradition of the
          ancient Irish and Scottish harps, while the more common nylon strings
          produce a full, mellow resonance.
        </p>
        <hr />
        <h4>Tristy Harp</h4>
        <p>
          Styled after the Welsh harp, the Tristy is appropriate for the
          individual who needs an affordable instrument, yet desires a rich and
          well balanced tone. It has 24 strings, starting at C below middle C,
          and can be made for nylon or wire strings. 34&quot; high.
        </p>
        <p>Price - $460, (Add $75 for Cherry) Case $190</p>
        <hr />
        <h4>Oladion Harp</h4>
        <p>
          We are happy to offer this exquisite harp with its classic
          celtic/bardic design. With the same 3 octave + range as the Tristy,
          the Oladion produces a full, bell-like tone with wire strings, and a
          mellow resonance with nylon strings. 35&quot; high.
        </p>
        <p>Price - $560 (Add $75 for Cherry), Case - $190</p>
        <hr />
        <h4>Concert Oladion Harp</h4>
        <p>
          This bold design is based upon the same templates and has the full
          resonance, powerful bass and beautiful tone of the original Concert
          Oranmore harp used on all of Magical Strings recordings! All maple
          construction 36 strings, 5-octave range from 2nd C below middle C,
          52&quot; tall.
        </p>
        <p>Price - $2,400, (add $200 for Cherry) Case - $290</p>
        <hr />
        <h4>Midsize Oladion Harp</h4>
        <p>Price - $1,200 in Maple, (Add $100 for Cherry)</p>
        <p>Case - $275</p>
        <hr />
        <h3>Ordering & Shipping</h3>
        <p>
          To order any instrument, a non-refundable deposit of $50.00 is
          required. An invoice will be sent, along with an estimated completion
          date. Lap harps are shipped via USPS priority, or UPS. Cost is
          $75-$100 to most places within the continental U.S. Shipping for
          concert harps varies, and will be arranged on an individual basis.
        </p>
        <hr />
        <h3>Sharping Levers</h3>
        <p>
          Brass flip-up levers made by Robinson&rsquo;s Harp Shop are used on
          the lap harp models (typically installed on the c&rsquo;s and
          f&rsquo;s for the three most common keys of C, G, and D).
          &nbsp;Loveland levers are used for the midsize and concert harp
          models.&nbsp; All levers are $15 each, and any number of strings can
          be specified, from certain notes, to a fully levered harp.&nbsp;
          Levers can also be retro-fitted at any time; I can install them as you
          need them, for the convenience of those who live within driving
          distance of my studio!&nbsp;
        </p>
        <hr />
        <h3>Cases</h3>
        <p>
          Soft cases are made of durable blue cordura nylon, padded with dense
          foam and a soft inner lining. Each case includes a large inside pocket
          for accessories, heavy-duty zippers and webbing for handles, plus
          rings for attaching a shoulder strap (not included).
          <br />
        </p>
        <p>
          Each instrument comes with a tuning key, information sheet, written
          music, and a resource list of books and recordings available for
          further instruction and enjoyment.
        </p>
        <hr />
        <h3>Warranty</h3>
        <p>
          All instruments carry a two-year warranty against defects in materials
          and workmanship.
        </p>
        <hr />
        <h4>Contact Us for More information</h4>
      </React.Fragment>
    );
  }
}

export default HarpShop;
