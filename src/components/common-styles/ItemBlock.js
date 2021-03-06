import styled from 'styled-components';

const ItemBlock = styled.div`
  width: 300px;
  border-radius: 4px;

  background-color: white;
  color: black;

  margin: 5px 10px 5px 0;

  &.active {
    background-color: orange;
    color: white;
  }
`;

export default ItemBlock;
