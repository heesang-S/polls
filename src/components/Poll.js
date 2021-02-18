import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
// import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
import PollHeaderRight from './common-styles/PollHeaderRight';
import PollTitleBlock from './common-styles/PollTitleBlock';
import PollBodyDiv from './common-styles/PollBodyDiv';
import PollDatesBlock from './common-styles/PollDatesBlock';
import PollFooterDiv from './common-styles/PollFooterDiv';
import UserBlock from './common-styles/UserBlock';
import ItemBlockInput from './common-styles/ItemBlockInput';
import ItemBlock from './common-styles/ItemBlock';

const PollItemsBlock = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OneItem = styled.div`
  display: flex;
`;

const ItemAddDeleteBtn = styled(Button)`
  height: 30px;
`;

const PollButtonList = styled.div`
  padding: 10px;

  float: right;
`;

const PollFooterBtn = styled(Button)`
  margin-left: 10px;
`;

const PollHeader = ({ toCreate, username, title, setTitle, handleTitleOnEnter }) => (
  <PollHeaderDiv width="100%" height="50px">
    <PollTitleBlock
      type="text"
      defaultValue={title}
      name="title"
      placeholder="Title"
      onKeyPress={handleTitleOnEnter}
      disabled={!toCreate}
      onChange={(e) => setTitle(e.target.value)}></PollTitleBlock>
    <PollHeaderRight right="0">
      <UserBlock
        position="relative"
        type="text"
        name="username"
        value={username}
        onChange={() => {}}
        disabled={true}></UserBlock>
    </PollHeaderRight>
  </PollHeaderDiv>
);

const PollBody = ({
  usernameRedux,
  toCreate,
  toVote,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  items,
  handleItemEnter,
  handleItemOnChange,
  handleItemOnClick,
  handleItemAdd,
  handleItemDelete,
}) => (
  <PollBodyDiv>
    <PollDatesBlock>
      <DateTimePicker onChange={setStartDate} value={startDate} />
      <span> ~ </span>
      <DateTimePicker onChange={setEndDate} value={endDate} />
    </PollDatesBlock>
    <PollItemsBlock>
      {!toVote
        ? items.map((item, index) => (
            <OneItem key={item.id}>
              <ItemBlockInput
                type="text"
                defaultValue={item.content}
                name={item.id}
                placeholder="write an item"
                onKeyPress={(e) => {
                  handleItemEnter(item.id, e);
                }}
                onChange={(e) => {
                  handleItemOnChange(item.id, e);
                }}
                disabled={toVote || !toCreate}
                className={item.votedUsers.includes(usernameRedux) ? 'active' : ''}
              />
              <ItemAddDeleteBtn
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  handleItemDelete(item.id);
                }}
                disabled={index < 3 || toVote ? true : false}
                data-item={item.id}>
                -
              </ItemAddDeleteBtn>
            </OneItem>
          ))
        : items.map((item, index) => (
            <OneItem key={item.id}>
              <ItemBlock
                name={item.id}
                onClick={(e) => {
                  handleItemOnClick(item.id, usernameRedux);
                }}
                className={item.votedUsers.includes(usernameRedux) ? 'active' : ''}>
                {item.content}
              </ItemBlock>
              <ItemAddDeleteBtn
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  handleItemDelete(item.id);
                }}
                disabled={index < 3 || toVote ? true : false}
                data-item={item.id}>
                -
              </ItemAddDeleteBtn>
            </OneItem>
          ))}
      <div className="poll-item-add">
        {!toVote && toCreate ? (
          <ItemAddDeleteBtn variant="outline-secondary" size="sm" onClick={handleItemAdd}>
            +
          </ItemAddDeleteBtn>
        ) : (
          ''
        )}
      </div>
    </PollItemsBlock>
  </PollBodyDiv>
);

const PollFooter = ({
  username,
  usernameRedux,
  votedUsers,
  poll,
  toCreate,
  toVote,
  handleOnPollCreate,
  handleOnPollDelete,
  handleOnPollVote,
  handleModalClose,
}) => (
  <PollFooterDiv>
    <PollButtonList>
      <PollFooterBtn size="sm" variant="outline-danger" onClick={handleModalClose}>
        Discard
      </PollFooterBtn>
      {toCreate ? (
        <PollFooterBtn
          size="sm"
          variant="primary"
          onClick={() => {
            handleOnPollCreate();
          }}>
          Create
        </PollFooterBtn>
      ) : (
        ''
      )}
      {!toCreate && username === usernameRedux && poll ? (
        <PollFooterBtn size="sm" variant="danger" onClick={handleOnPollDelete}>
          Delete
        </PollFooterBtn>
      ) : (
        ''
      )}
      {toVote && !votedUsers.includes(usernameRedux) ? (
        <PollFooterBtn size="sm" variant="warning" onClick={handleOnPollVote}>
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
    votedUsers: [],
  },
  {
    id: 2,
    content: '',
    votedUsers: [],
  },
  {
    id: 3,
    content: '',
    votedUsers: [],
  },
];

const Poll = ({
  pollRedux,
  pollNextId,
  usernameRedux,
  toCreate,
  toVote,
  pollSave,
  pollDelete,
  pollVote,
  handleModalClose,
}) => {
  const [id, setId] = useState(pollRedux ? pollRedux.id : pollNextId + 1);
  const [username, setUsername] = useState(pollRedux ? pollRedux.username : usernameRedux);
  const [title, setTitle] = useState(pollRedux ? pollRedux.title : '');
  const [startDate, setStartDate] = useState(pollRedux ? pollRedux.startDate : '');
  const [endDate, setEndDate] = useState(pollRedux ? pollRedux.endDate : '');
  const [items, setItems] = useState(pollRedux ? pollRedux.items : initialItems);
  let itemId = useRef(4);
  const [isInProgress, setIsInProgress] = useState(pollRedux ? pollRedux.isInProgress : false);
  const [isDone, setIsDone] = useState(pollRedux ? pollRedux.isDone : false);
  const [votedUsers, setVotedUsers] = useState(pollRedux ? pollRedux.votedUsers : []);
  const [result, setResult] = useState(pollRedux ? pollRedux.result : null);

  const handleTitleOnEnter = (e) => {
    if (window.event.keyCode == 13) {
      //   setTitle(e.target.value);
      e.target.blur();
    }
  };

  const handleItemEnter = (id, e) => {
    if (window.event.keyCode == 13) {
      e.target.blur();
    }
  };

  const handleItemOnChange = (id, e) => {
    if (window.event.keyCode !== 13) {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            return {
              id,
              content: e.target.value,
              votedUsers: [],
            };
          }
          return item;
        })
      );
    }
  };

  const handleItemOnClick = (id) => {
    if (toVote) {
      setItems(
        items.map((item) => {
          if (item.id === id) {
            return {
              id,
              content: item.content,
              votedUsers: item.votedUsers.includes(usernameRedux)
                ? item.votedUsers.filter((user) => user !== usernameRedux)
                : item.votedUsers.concat([usernameRedux]),
            };
          }
          return item;
        })
      );
    }
  };

  const handleItemAdd = (e) =>
    setItems([...items, { id: itemId.current++, content: '', votedUsers: [] }]);

  const handleItemDelete = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleOnPollCreate = () => {
    let p = {
      id,
      username,
      title,
      startDate,
      endDate,
      items,
      isInProgress,
      isDone,
      votedUsers,
      result,
    };

    pollSave(p);
    handleModalClose();
  };

  const handleOnPollDelete = () => {
    pollDelete(id);
    handleModalClose();
  };

  const handleOnPollVote = () => {
    pollVote({ id, username, items });
    handleModalClose();
  };

  return (
    <PollBlock width="100%">
      <PollHeader
        toCreate={toCreate}
        title={title}
        setTitle={setTitle}
        username={username}
        handleTitleOnEnter={handleTitleOnEnter}
      />
      <PollBody
        usernameRedux={usernameRedux}
        toVote={toVote}
        toCreate={toCreate}
        startDate={startDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        endDate={endDate}
        items={items}
        handleItemEnter={handleItemEnter}
        handleItemOnChange={handleItemOnChange}
        handleItemOnClick={handleItemOnClick}
        handleItemAdd={handleItemAdd}
        handleItemDelete={handleItemDelete}
      />
      <PollFooter
        username={username}
        usernameRedux={usernameRedux}
        poll={pollRedux}
        votedUsers={votedUsers}
        toCreate={toCreate}
        toVote={toVote}
        handleOnPollCreate={handleOnPollCreate}
        handleOnPollDelete={handleOnPollDelete}
        handleOnPollVote={handleOnPollVote}
        handleModalClose={handleModalClose}
      />
    </PollBlock>
  );
};

export default Poll;
