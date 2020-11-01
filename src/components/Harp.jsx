import React from 'react';
import { Group, Row } from '../layouts';

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
  } = harp;
  const harpPhoto = require(`../assets/harps/${img}`);
  return (
    <Row>
      <div className="harp">
        <div className="harp__header">
          <h3 className="harp__title">{name}</h3>
        </div>
        <div className="harp__info">
          <img className="harp__photo" src={harpPhoto} alt={name} />
          <div className="harp__details">
            <Row>
              <Group>
                <h4 className="harp__sub-heading">Specifications</h4>
                <p>Range: {range} octaves</p>
                <p>Height: {height}</p>
              </Group>
            </Row>
            <Row>
              <Group>
                <h4 className="harp__sub-heading">Description</h4>
                <p className="harp__description">{description}</p>
              </Group>
            </Row>
            <Row>
              <Group>
                <h4 className="harp__sub-heading">Comes With</h4>
                <p>
                  Tuning key, information sheet, written music, and a resource
                  list of books and recordings available for further instruction
                  and enjoyment.
                </p>
              </Group>
            </Row>
            <Group>
              <h4 className="harp__sub-heading">Pricing</h4>
              <p>Maple: ${harpPrice}</p>
              <p>Cherry: ${harpPrice + cherryPrice}</p>
              <p>Case: ${casePrice}</p>
            </Group>
          </div>
        </div>
      </div>
    </Row>
  );
};
