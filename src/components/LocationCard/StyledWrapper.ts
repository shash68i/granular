import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 6rem;
  width: 100%;
  background-color: #464548;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default StyledWrapper;
