import styled from 'styled-components';

const StyledWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  gap: 2rem;

  .left-container {
    width: 40%;
    height: 100%;
    /* background-color: red; */
  }

  .right-container {
    width: 60%;
    height: 100%;
    /* background-color: blue; */
  }
`;

export default StyledWrapper;
