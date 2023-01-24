import React from 'react';
import StyledWrapper from './StyledWrapper';
import { ReactComponent as Logo } from './../../assets/svg/search-icon.svg';

const SearchBox = () => {
  return (
    <StyledWrapper>
      <input className="input-box" type="text" placeholder="Search Location..." />
      <button className="btn-search">
        <Logo className="search-logo" />
      </button>
    </StyledWrapper>
  );
};

export default SearchBox;
