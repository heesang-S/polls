import styled from 'styled-components';

const PollBlock = styled.div`
  width: ${(props) => props.width || '400px'};
  background: white;
  border-radius: 2px;

  overflow-y: auto;

  margin-top: ${(props) => props.marginTop || '0'};
  box-shadow: 1px 1px 1px black;
`;

export default PollBlock;
