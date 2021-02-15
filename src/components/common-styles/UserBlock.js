import styled from 'styled-components';

const UserBlock = styled.input`
  width: 150px;
  background-color: ${(props) => props.color || 'white'};

  &[disabled] {
    cursor: default;
  }
`;

export default UserBlock;
