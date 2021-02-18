import styled from 'styled-components';

const PollTitleBlock = styled.input`
  width: 200px;
  background-color: inherit;
  color: #231815;

  border: none;
  text-align: center;

  &::placeholder {
    text-align: center;
    color: #231815;
    opacity: 0.7;
  }
`;

export default PollTitleBlock;
