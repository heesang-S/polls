import styled from 'styled-components';

const PollDatesBlock = styled.div`
  flex: 1 100px;
  justify-self: right;

  display: flex;
  justify-content: center;

  & > * {
    color: grey;
    border-radius: 4px;
    font-weight: 500;
  }
`;

export default PollDatesBlock;
