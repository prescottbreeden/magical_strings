import React from 'react';

const assetsContext = (() => {
  try {
    return require.context('../assets', true, /\.(png|jpe?g|gif|svg)$/);
  } catch (error) {
    return null;
  }
})();

const resolveSrc = src => {
  if (!src) return src;
  if (/^(https?:)?\//.test(src)) {
    return src;
  }

  if (assetsContext) {
    try {
      const mod = assetsContext(`./${src}`);
      return typeof mod === 'string' ? mod : mod?.default ?? src;
    } catch (error) {
      console.warn('Missing event media asset', src);
    }
  }

  return src;
};

const defaultMetadata = { alt: '', caption: '' };

const EventMedia = ({ images = [] }) => {
  const hasImages = images.length > 0;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setIndex(0);
  }, [images]);

  if (!hasImages) {
    return null;
  }

  if (images.length === 1) {
    const single = images[0] ?? defaultMetadata;
    const resolvedSrc = resolveSrc(single.src);

    return (
      <figure className="event__media">
        <div className="event__media-frame event__media-frame--single">
          <img
            className="event__media-image"
            src={resolvedSrc}
            alt={single.alt}
          />
        </div>
        {single.caption && (
          <figcaption className="event__media-caption">
            {single.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  const showPrev = () =>
    setIndex(current => (current === 0 ? images.length - 1 : current - 1));
  const showNext = () => setIndex(current => (current + 1) % images.length);

  const currentImage = images[index] ?? defaultMetadata;
  const resolvedSrc = resolveSrc(currentImage.src);

  return (
    <figure className="event__media event__media-carousel">
      <div className="event__media-frame">
        <img
          className="event__media-image"
          src={resolvedSrc}
          alt={currentImage.alt}
        />
      </div>
      {currentImage.caption && (
        <figcaption className="event__media-caption" aria-live="polite">
          {currentImage.caption}
        </figcaption>
      )}
      <div className="event__media-controls">
        <button
          type="button"
          className="event__media-button"
          onClick={showPrev}
          aria-label="Previous slide"
        >
          Previous
        </button>
        <span className="event__media-index" aria-live="polite">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          className="event__media-button"
          onClick={showNext}
          aria-label="Next slide"
        >
          Next
        </button>
      </div>
    </figure>
  );
};

export default EventMedia;
