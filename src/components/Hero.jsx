import React from 'react';

/**
 * Hero Component - Displays a hero image, with an optional small variant.
 *
 * Props:
 * - `photo` (string): The URL of the hero image to display.
 * - `alt` (string): Alternative text for the image, used for accessibility.
 * - `small` (boolean, optional): If true, renders a smaller version of the hero image. Defaults to false.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.photo - The URL of the hero image.
 * @param {string} props.alt - Alternative text for the hero image.
 * @param {boolean} [props.small=false] - Indicates if the small variant of the hero image should be used.
 */
const Hero = props => {
  return (
    <div className="hero">
      {props.small ? (
        <img
          className="hero__img hero__img--small"
          src={props.photo}
          alt={props.alt}
        />
      ) : (
        <img className="hero__img" src={props.photo} alt={props.alt} />
      )}
    </div>
  );
};

export default Hero;
