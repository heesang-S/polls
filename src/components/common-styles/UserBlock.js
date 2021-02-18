import styled from 'styled-components';

const UserBlock = styled.input`
  width: 50px;
  height: 35px;
  background-color: ${(props) => props.color || '#B3B6C2'};

  position: ${(props) => props.position || 'absolute'};
  right: 20px;

  &:disabled {
    cursor: default;
    border: none;
  }
`;

export default UserBlock;
