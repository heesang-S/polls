import styled from 'styled-components';

const PollBodyDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height || '520px'};

  overflow-y: auto;
  color: white;

  dispaly: flex;
`;

export default PollBodyDiv;
