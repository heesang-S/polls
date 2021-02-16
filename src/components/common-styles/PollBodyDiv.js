import styled from 'styled-components';

const PollBodyDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height || '520px'};

  overflow-y: auto;
  background-color: #f8f8f8;
  color: white;

  padding: 20px;
`;

export default PollBodyDiv;
