import React from 'react';
import { LocationList } from '../LocationList';
import { MapComponent } from '../MapComponent';
import { MapHeader } from '../MapHeader';
import RecentLocations from '../RecentLocations/RecentLocations';
import { SearchBox } from '../SearchBox';
import StyledWrapper from './StyledWrapper';

const MainSection = () => {
  return (
    <StyledWrapper>
      <div className="left-container">
        <SearchBox />
        <LocationList />
      </div>
      <div className="right-container">
        <MapHeader />
        <MapComponent />
        <RecentLocations />
      </div>
    </StyledWrapper>
  );
};

export default MainSection;
