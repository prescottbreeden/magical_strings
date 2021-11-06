import React from 'react';
import construction from './../assets/underconstruction.png';

const UnderConstruction = () => {
  return (
    <React.Fragment>
      <div className="under-construction">
        <img
          src={construction}
          alt="Under Construction"
          className="under-construction__img"
        />
      </div>
    </React.Fragment>
  );
};

export default UnderConstruction;
