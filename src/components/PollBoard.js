import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// import Poll from './Poll';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PollContainer from '../containers/PollContainer';

import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
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

const PollBoardHeader = ({ userId, handleInputEnter }) => (
  <PollHeaderDiv width="100%" height="60px">
    <PollBoardTitle>Polls</PollBoardTitle>
    <UserBlock
      type="text"
      name="userId"
      value={userId}
      placeholder="who are you?"
      onKeyPress={handleInputEnter}></UserBlock>
  </PollHeaderDiv>
);

const PollSummary = ({ poll, handlePollSummaryClick }) => {
  const { id, userId, title, startDate, endDate, items, result } = poll;
  return (
    <PollBlock marginTop="10px" onClick={handlePollSummaryClick}>
      <PollHeaderDiv height="50px">
        <PollTitleBlock type="text" value={title} disabled></PollTitleBlock>
        <UserBlock type="text" name="userId" value={userId} disabled></UserBlock>
      </PollHeaderDiv>
      <PollBodyDiv height="100px">
        <PollDatesBlock>
          <span>{startDate}</span> ~ <span>{endDate}</span>
        </PollDatesBlock>
        <div>{result ? 'On going' : `Result : ${result}`}</div>
      </PollBodyDiv>
      <PollFooterDiv></PollFooterDiv>
    </PollBlock>
  );
};

const PollBoard = () => {
  const polls = useSelector((state) => state.poll.polls);

  const [pollShow, setPollShow] = useState(false);
  const [pollId, setPollId] = useState('');
  const [toCreate, setToCreate] = useState(false);
  const [toVote, setToVote] = useState(false);

  const handleCreateClick = (e) => setPollShow(true);

  const handleModalClose = (e) => setPollShow(false);

  const handlePollSummaryClick = (e) => {
    console.log('e : ', e);
  };

  return (
    <PollBoardBlock>
      <PollBoardHeader />
      <PollListBlock>
        {polls.map((poll) => (
          <PollSummary poll={poll} handlePollSummaryClick={handlePollSummaryClick} />
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
