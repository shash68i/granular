import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 6.4rem;
  font-size: 2rem;
  font-weight: 600;
  display: flex;

  .population {
    width: 60%;
    margin-right: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.mapHeader.bg};

    &__tag {
      display: flex;
      gap: 1rem;
    }
  }

  .btn-share {
    width: 40%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.mapHeader.bg};
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default StyledWrapper;
