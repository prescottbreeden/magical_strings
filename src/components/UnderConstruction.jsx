import React from 'react';
import construction from './../assets/underconstruction.png';

const UnderConstruction = props => {
  return (
    <React.Fragment>
      <div className="under-construction">
        <img src={construction} alt="" className="under-construction__img" />
      </div>
    </React.Fragment>
  );
};

export default UnderConstruction;
