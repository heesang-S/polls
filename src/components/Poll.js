import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
import PollTitleBlock from './common-styles/PollTitleBlock';
import PollBodyDiv from './common-styles/PollBodyDiv';
import PollDatesBlock from './common-styles/PollDatesBlock';
import PollFooterDiv from './common-styles/PollFooterDiv';
import UserBlock from './common-styles/UserBlock';
import ItemBlock from './common-styles/ItemBlock';

const PollItemsBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemAddDeleteBtn = styled(Button)``;

const PollButtonList = styled.div`
  padding: 10px;

  float: right;
`;

const PollFooterBtn = styled(Button)`
  margin-left: 10px;
`;

const PollHeader = ({ pollId, userId, title, handleInputEnter }) => (
  <PollHeaderDiv width="100%" height="50px">
    <PollTitleBlock
      type="text"
      value={title}
      name="title"
      placeholder="Title"
      onKeyPress={handleInputEnter}
      onChange={() => {}}></PollTitleBlock>
    <UserBlock
      type="text"
      name="userId"
      value={userId}
      placeholder="who are you?"
      onKeyPress={handleInputEnter}
      onChange={() => {}}
      disabled></UserBlock>
  </PollHeaderDiv>
);

const PollBody = ({
  startDate,
  endDate,
  items,
  handleItemEnter,
  handleItemAdd,
  handleItemDelete,
}) => (
  <PollBodyDiv>
    <PollDatesBlock>
      <span>{startDate}</span> ~ <span>{endDate}</span>
    </PollDatesBlock>
    <PollItemsBlock>
      {items.map((item, index) => (
        <div key={item.id}>
          <ItemBlock
            type="text"
            value={item.content}
            name={item.id}
            placeholder="write an item"
            onKeyPress={handleItemEnter}
            onClick={() => {}}
            onChange={() => {}}
          />
          <ItemAddDeleteBtn
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              handleItemDelete(item.id);
            }}
            disabled={index < 3 ? true : false}
            data-item={item.id}>
            -
          </ItemAddDeleteBtn>
        </div>
      ))}
      <div className="poll-item-add">
        <ItemAddDeleteBtn variant="outline-secondary" size="sm" onClick={handleItemAdd}>
          +
        </ItemAddDeleteBtn>
      </div>
    </PollItemsBlock>
  </PollBodyDiv>
);

const PollFooter = ({ toCreate, toVote, handleModalClose, handlePollSave }) => (
  <PollFooterDiv>
    <PollButtonList>
      <PollFooterBtn size="sm" variant="danger" onClick={handleModalClose}>
        Discard
      </PollFooterBtn>
      {toCreate ? (
        <PollFooterBtn size="sm" variant="primary" onClick={handlePollSave}>
          Save
        </PollFooterBtn>
      ) : (
        ''
      )}
      {toVote ? (
        <PollFooterBtn size="sm" variant="warning" onClick={handlePollSave}>
          Vote
        </PollFooterBtn>
      ) : (
        ''
      )}
    </PollButtonList>
  </PollFooterDiv>
);

const initialItems = [
  {
    id: 1,
    content: '',
    count: 0,
  },
  {
    id: 2,
    content: '',
    count: 0,
  },
  {
    id: 3,
    content: '',
    count: 0,
  },
];

const Poll = ({ pollRedux, toCreate, handlePollSave, handlePollDelete, handleModalClose }) => {
  const [items, setItems] = useState(initialItems);
  let itemId = useRef(4);

  const [poll, setPoll] = useState({
    id: pollRedux ? pollRedux.id : '',
    userId: pollRedux ? pollRedux.userId : '',
    title: pollRedux ? pollRedux.title : '',
    startDate: pollRedux ? pollRedux.startDate : '',
    endDate: pollRedux ? pollRedux.endDate : '',
    items: pollRedux ? pollRedux.items : items,
    result: pollRedux ? pollRedux.result : '',
  });

  const handleEditClick = (e) => {
    console.log('e : ', e);
  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      e.target.disabled = true;
    }
  };

  const handleItemEnter = (e) => {
    console.log('e : ', e);
  };

  const handleItemAdd = (e) => setItems([...items, { id: itemId.current++, content: '' }]);

  const handleItemDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <PollBlock width="100%">
      <PollHeader
        title={poll.title}
        pollId={poll.id}
        userId={poll.userId}
        handleEditClick={handleEditClick}
        handleInputEnter={handleInputEnter}
      />
      <PollBody
        startDate={poll.startDate}
        endDate={poll.endDate}
        items={items}
        handleItemEnter={handleItemEnter}
        handleItemAdd={handleItemAdd}
        handleItemDelete={handleItemDelete}
      />
      <PollFooter
        toCreate={toCreate}
        handleModalClose={handleModalClose}
        handlePollSave={handlePollSave}
      />
    </PollBlock>
  );
};

export default Poll;
