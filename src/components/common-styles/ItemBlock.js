import styled from 'styled-components';

const ItemBlock = styled.input`
  width: 300px;
  border-radius: 4px;

  background-color: grey;
  border: none;

  &[disabled] {
    cursor: default;
  }
`;

export default ItemBlock;
