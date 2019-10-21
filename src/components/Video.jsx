import React from 'react';

const Video = props => {
  const { src, title } = props;

  return (
    <React.Fragment>
      <div className="video">
        <iframe
          className="video__iframe"
          title={title}
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </React.Fragment>
  );
};

export default Video;
