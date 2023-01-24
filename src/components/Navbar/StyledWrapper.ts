import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 8rem;
  font-size: 4rem;
  color: ${({ theme }) => theme.navbar.text};
  border-bottom: ${({ theme }) => theme.navbar.border};

  .nav-container {
    width: 80%;
    height: 8rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
  }
`;

export default StyledWrapper;
