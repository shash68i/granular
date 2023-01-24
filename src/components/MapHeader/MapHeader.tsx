import React from 'react';
import StyledWrapper from './StyledWrapper';
import { ReactComponent as PopulationIcon } from './../../assets/svg/population-icon.svg';
import { ReactComponent as ShareIcon } from './../../assets/svg/share-icon.svg';

const MapHeader = () => {
  return (
    <StyledWrapper>
      <div className="population">
        <div className="population__tag">
          <div>
            <PopulationIcon />
          </div>
          <div> Population</div>
        </div>
        <div className="population__data">59000</div>
      </div>
      <div className="btn-share">
        <div className="btn-share__text">Share Location</div>
        <div className="btn-share__logo">
          <ShareIcon />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default MapHeader;
