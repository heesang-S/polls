import React, { useState } from 'react';
import styled from 'styled-components';

// import Modal from 'react-bootstrap/Modal';
import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
import PollHeaderBtn from './common-styles/PollHeaderBtn';
import PollTitleBlock from './common-styles/PollTitleBlock';
import PollBodyDiv from './common-styles/PollBodyDiv';
import PollDatesBlock from './common-styles/PollDatesBlock';
import PollFooterDiv from './common-styles/PollFooterDiv';
import UserBlock from './common-styles/UserBlock';
import ItemBlock from './common-styles/ItemBlock';

const PollItemsBlock = styled.div`
  width: 360px;

  justify-self: center;
`;

const PollHeader = ({ pollId, userId, title, handleEditClick, handleInputEnter }) => (
  <PollHeaderDiv>
    {pollId && userId ? (
      <PollHeaderBtn variant="warning" onClick={handleEditClick}>
        Edit
      </PollHeaderBtn>
    ) : (
      ''
    )}
    <PollTitleBlock
      type="text"
      value={title}
      name="title"
      placeholder="Title"
      onKeyPress={handleInputEnter}></PollTitleBlock>
    <UserBlock
      type="text"
      name="userId"
      value={userId}
      placeholder="who are you?"
      onKeyPress={handleInputEnter}
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
      {items.map((item) => (
        <div key={item.id}>
          <ItemBlock
            type="text"
            value={item.content}
            name={item.id}
            placeholder="write an item"
            onKeyPress={handleItemEnter}
          />
          <button onClick={handleItemDelete}>-</button>
        </div>
      ))}
    </PollItemsBlock>
    <div class="poll-item-add">
      <button onClick={handleItemAdd}>+</button>
    </div>
  </PollBodyDiv>
);

const PollFooter = ({ handlePollSave, handleCancel }) => (
  <PollFooterDiv>
    <div class="poll-button-list">
      <button onClick={handleCancel}>Discard</button>
      <button onClick={handlePollSave}>Save</button>
    </div>
  </PollFooterDiv>
);

const initialItems = [
  {
    id: 1,
    content: null,
  },
  {
    id: 2,
    content: null,
  },
  {
    id: 3,
    content: null,
  },
];

const Poll = ({ pollRedux, handlePollSave, handlePollDelete }) => {
  const [poll, setPoll] = useState({
    id: pollRedux ? pollRedux.id : null,
    userId: pollRedux ? pollRedux.userId : null,
    title: pollRedux ? pollRedux.title : null,
    startDate: pollRedux ? pollRedux.startDate : null,
    endDate: pollRedux ? pollRedux.endDate : null,
    items: pollRedux ? pollRedux.items : initialItems,
    result: pollRedux ? pollRedux.result : null,
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

  const handleItemAdd = (e) => {
    console.log('e : ', e);
  };

  const handleItemDelete = (e) => {
    console.log('e : ', e);
  };

  const handleCancel = (e) => {
    console.log('e : ', e);
  };

  return (
    <PollBlock>
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
        items={poll.items}
        handleItemEnter={handleItemEnter}
        handleItemAdd={handleItemAdd}
        handleItemDelete={handleItemDelete}
      />
      <PollFooter handlePollSave={handlePollSave} handleCancel={handleCancel} />
    </PollBlock>
  );
};

export default Poll;
