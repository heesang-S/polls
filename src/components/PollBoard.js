import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authLogin, authLogout } from '../modules/auth';

// import Poll from './Poll';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PollContainer from '../containers/PollContainer';

import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
import PollHeaderRight from './common-styles/PollHeaderRight';
import PollTitleBlock from './common-styles/PollTitleBlock';
import PollBodyDiv from './common-styles/PollBodyDiv';
import PollDatesBlock from './common-styles/PollDatesBlock';
import PollFooterDiv from './common-styles/PollFooterDiv';
import UserBlock from './common-styles/UserBlock';

const PollBoardBlock = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const PollBoardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #231815;

  display: inline;
`;

const PollListBlock = styled.div`
  padding: 20px 20px 2p 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const PollCreateBtn = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const PollBoardHeader = ({
  username,
  logged,
  handleInputOnChange,
  handleInputKeyPress,
  handleLoginOnClick,
  handleLogout,
}) => (
  <PollHeaderDiv width="100%" height="60px">
    <PollBoardTitle>Polls</PollBoardTitle>
    <PollHeaderRight>
      <UserBlock
        position="relative"
        type="text"
        name="username"
        value={username}
        placeholder="Name?"
        onKeyPress={handleInputKeyPress}
        onChange={handleInputOnChange}
        disabled={logged}></UserBlock>
      {logged ? (
        <Button
          variant="primary"
          onClick={() => {
            handleLogout(username);
          }}>
          Logout
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            handleLoginOnClick();
          }}>
          Login
        </Button>
      )}
    </PollHeaderRight>
  </PollHeaderDiv>
);

const PollSummary = ({ poll, handlePollSummaryClick }) => {
  const { id, username, title, startDate, endDate, items, votedUsers, result } = poll;
  return (
    <PollBlock
      marginTop="10px"
      width="450px"
      onClick={() => {
        handlePollSummaryClick(poll);
      }}>
      <PollHeaderDiv width="100%" height="50px">
        <PollTitleBlock type="text" value={title} disabled={true}></PollTitleBlock>
        <PollHeaderRight right="0">
          <UserBlock
            position="relative"
            type="text"
            name="username"
            value={username}
            disabled={true}></UserBlock>
        </PollHeaderRight>
      </PollHeaderDiv>
      <PollBodyDiv height="100px">
        <PollDatesBlock>
          <DateTimePicker onChange={() => {}} value={startDate} disabled={true} />
          <span> ~ </span>
          <DateTimePicker onChange={() => {}} value={endDate} disabled={true} />
        </PollDatesBlock>
        <div>{result ? 'On going' : `Result : ${result}`}</div>
      </PollBodyDiv>
      <PollFooterDiv></PollFooterDiv>
    </PollBlock>
  );
};

const PollBoard = () => {
  // auth check
  const logged = useSelector((state) => state.auth.logged);
  const username = useSelector((state) => state.auth.name);

  // polls check
  const nextPollId = useSelector((state) => state.poll.nextId);
  const polls = useSelector((state) => state.poll.polls);

  const dispatch = useDispatch();
  const handleLogin = (name) => dispatch(authLogin(name));
  const handleLogout = (name) => dispatch(authLogout(name));

  const [inputName, setInputName] = useState(username);
  const [pollShow, setPollShow] = useState(false);
  const [pollId, setPollId] = useState('');
  const [toCreate, setToCreate] = useState(false);
  const [toVote, setToVote] = useState(false);

  const handleInputOnChange = (e) => {
    setInputName(e.target.value);
  };
  const handleInputKeyPress = (e) => {
    if (window.event.keyCode == 13) {
      if (logged) {
        handleLogout(e.target.value);
      } else {
        handleLogin(e.target.value);
      }
    }
  };
  const handleLoginOnClick = () => {
    handleLogin(inputName);
  };

  const handleCreateClick = (e) => {
    setPollId('');
    setToCreate(logged);
    setToVote(false);

    setPollShow(true);
  };
  const handleModalClose = (e) => setPollShow(false);
  const handlePollSummaryClick = (poll) => {
    const { id, username, title, startDate, endDate, items, result } = poll;

    setPollId(id);
    setToCreate(false);
    setToVote(logged);

    setPollShow(true);
  };

  return (
    <PollBoardBlock>
      <PollBoardHeader
        username={inputName}
        logged={logged}
        handleInputOnChange={handleInputOnChange}
        handleInputKeyPress={handleInputKeyPress}
        handleLoginOnClick={handleLoginOnClick}
        handleLogout={handleLogout}
      />
      <PollListBlock>
        {polls.map((poll) => (
          <PollSummary key={poll.id} poll={poll} handlePollSummaryClick={handlePollSummaryClick} />
        ))}
      </PollListBlock>
      <PollCreateBtn variant="primary" onClick={handleCreateClick}>
        Create
      </PollCreateBtn>
      <Modal show={pollShow} onHide={handleModalClose}>
        <PollContainer
          pollId={pollId}
          toCreate={toCreate}
          toVote={toVote}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </PollBoardBlock>
  );
};

export default PollBoard;
