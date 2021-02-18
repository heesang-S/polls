import styled from 'styled-components';

const PollHeaderRight = styled.div`
  position: absolute;
  right: ${(props) => props.right || '20px'};
`;

export default PollHeaderRight;
