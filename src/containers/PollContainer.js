import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pollSave, pollDelete } from '../modules/poll';

import Poll from '../components/Poll';

const PollContainer = (pollId) => {
  const pollRedux = useSelector((state) => state.poll.polls.find((p) => p.id === pollId));

  const dispatch = useDispatch();
  const handlePollSave = (poll) => dispatch(pollSave(poll));
  const handlePollDelete = (pollId) => dispatch(pollDelete(pollId));

  return (
    <Poll
      pollRedux={pollRedux}
      handlePollSave={handlePollSave}
      handlePollDelete={handlePollDelete}
    />
  );
};

export default PollContainer;
