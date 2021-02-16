import styled from 'styled-components';

const PollHeaderDiv = styled.div`
  width: ${(props) => props.width || '400px'};
  height: ${(props) => props.height || '80px'};
  background: #b3b6c2;

  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;
`;

export default PollHeaderDiv;
