import styled from 'styled-components';

const ItemBlock = styled.input`
  width: 300px;
  border-radius: 4px;

  background-color: white;

  margin: 5px 10px 5px 0;

  &:disabled {
    cursor: pointer;
  }

  $:disabled:active {
    background-color: orange;
  }
`;

export default ItemBlock;
