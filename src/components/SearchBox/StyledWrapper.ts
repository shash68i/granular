import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 6.4rem;

  .input-box {
    width: 88%;
    border: none;
    background-color: ${({ theme }) => theme.search.bg.input};
    border-radius: ${({ theme }) => theme.borderRadius} 0 0 ${({ theme }) => theme.borderRadius};
    padding: 12px;
    font-size: 2rem;
    color: ${({ theme }) => theme.text};

    &::placeholder {
      color: #666666;
    }
  }

  .btn-search {
    width: 12%;
    border: none;
    background-color: ${({ theme }) => theme.search.bg.button};
    border-radius: 0 ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0;
  }
`;

export default StyledWrapper;
