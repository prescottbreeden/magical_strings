import React from 'react';
import { add } from 'ramda';
import { Group, Row } from '../layouts';
import { formatMoney } from '../utilities';

export const Harp = harp => {
  const {
    name,
    img,
    description,
    range,
    height,
    harpPrice,
    cherryPrice,
    casePrice,
    sample,
    strings,
  } = harp;
  const harpPhoto = require(`../assets/harps/${img}`);
  return (
    <Group>
      <Row>
        <div className="harp">
          <div className="harp__header">
            <h3 className="harp__title">{name}</h3>
          </div>
          <div className="harp__info">
            <img className="harp__photo" src={harpPhoto} alt={name} />
            <div className="harp__details">
              <div>
                <Row>
                  <Group>
                    <h4 className="harp__sub-heading">Specifications</h4>
                    <p className="harp__item">
                      <span className="harp__item--title">Range:</span>
                      <span className="harp__item--value">{range} octaves</span>
                    </p>
                    <p className="harp__item">
                      <span className="harp__item--title">Height:</span>
                      <span className="harp__item--value">{height}</span>
                    </p>
                    <p className="harp__item">
                      <span className="harp__item--title">Strings:</span>
                      <span className="harp__item--value">{strings}</span>
                    </p>
                  </Group>
                </Row>
                <Row>
                  <Group>
                    <h4 className="harp__sub-heading">Description</h4>
                    <p className="harp__description">{description}</p>
                  </Group>
                </Row>
              </div>
              {sample && (
                <Row>
                  <Group>
                    <h4 className="harp__sub-heading">Listen to a Sample</h4>
                    <iframe
                      title="sample"
                      style={{ border: '0', width: '100%', height: '4.2rem' }}
                      src={sample.src}
                      seamless
                    >
                      <a href={sample.link}>Fairy Wind by Magical Strings</a>
                    </iframe>
                  </Group>
                </Row>
              )}
              <Group>
                <h4 className="harp__sub-heading">Pricing</h4>
                <p className="harp__item">
                  <span className="harp__item--title">Maple:</span>
                  <span className="harp__item--value">
                    {formatMoney(harpPrice)}
                  </span>
                </p>
                <p className="harp__item">
                  <span className="harp__item--title">Cherry:</span>
                  <span className="harp__item--value">
                    {formatMoney(add(harpPrice, cherryPrice))}
                  </span>
                </p>
                <p className="harp__item">
                  <span className="harp__item--title">Case:</span>
                  <span className="harp__item--value">
                    {formatMoney(casePrice)}
                  </span>
                </p>
              </Group>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <Group>
          <p className="harp__fine-print">
            All harps come with tuning key, information sheet, written music,
            and a resource list of books and recordings available for further
            instruction and enjoyment.
          </p>
        </Group>
      </Row>
    </Group>
  );
};
