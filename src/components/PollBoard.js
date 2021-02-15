import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// import Poll from './Poll';

import PollBlock from './common-styles/PollBlock';
import PollHeaderDiv from './common-styles/PollHeaderDiv';
import PollHeaderBtn from './common-styles/PollHeaderBtn';
import PollTitleBlock from './common-styles/PollTitleBlock';
import PollBodyDiv from './common-styles/PollBodyDiv';
import PollDatesBlock from './common-styles/PollDatesBlock';
import PollFooterDiv from './common-styles/PollFooterDiv';
import UserBlock from './common-styles/UserBlock';

const PollBoardBlock = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const PollBoardHeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: black;

  display: flex;
`;

const PollBoardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;

  justify-self: center;
  align-self: center;
`;

const PollListBlock = styled.div`
  padding: 20px 20px 0 20px;
`;

const PollBoardHeader = ({ userId, handleCreateClick, handleInputEnter }) => (
  <PollBoardHeaderDiv>
    <PollHeaderBtn variant="warning" onClick={handleCreateClick}>
      Create
    </PollHeaderBtn>
    <PollBoardTitle>Polls</PollBoardTitle>
    <UserBlock
      type="text"
      name="userId"
      value={userId}
      placeholder="who are you?"
      onKeyPress={handleInputEnter}></UserBlock>
  </PollBoardHeaderDiv>
);

const PollSummary = ({ poll, handlePollSummaryClick }) => {
  const { id, userId, title, startDate, endDate, items, result } = poll;
  return (
    <PollBlock onClick={handlePollSummaryClick}>
      <PollHeaderDiv>
        <PollTitleBlock type="text" value={title} disabled></PollTitleBlock>
        <UserBlock type="text" name="userId" value={userId} disabled></UserBlock>
      </PollHeaderDiv>
      <PollBodyDiv>
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
    </PollBoardBlock>
  );
};

export default PollBoard;
