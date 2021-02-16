import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pollSave, pollDelete } from '../modules/poll';

import Poll from '../components/Poll';

const PollContainer = ({ pollId, toCreate, handleModalClose }) => {
  const pollRedux = useSelector((state) => state.poll.polls.find((p) => p.id === pollId));

  const dispatch = useDispatch();
  const handlePollSave = (poll) => dispatch(pollSave(poll));
  const handlePollDelete = (pollId) => dispatch(pollDelete(pollId));

  console.log('pollRedux : ', pollRedux);

  return (
    <Poll
      pollRedux={pollRedux}
      toCreate={toCreate}
      handlePollSave={handlePollSave}
      handlePollDelete={handlePollDelete}
      handleModalClose={handleModalClose}
    />
  );
};

export default PollContainer;
