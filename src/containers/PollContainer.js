import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pollSave, pollDelete, pollVote } from '../modules/poll';

import Poll from '../components/Poll';

const PollContainer = ({ pollId, toCreate, toVote, handleModalClose }) => {
  const pollRedux = useSelector((state) => state.poll.polls.find((p) => p.id === pollId));
  const pollNextId = useSelector((state) => state.poll.nextId);

  const usernameRedux = useSelector((state) => state.auth.name);

  const dispatch = useDispatch();
  const thisPollSave = (poll) => dispatch(pollSave(poll));
  const thisPollDelete = (pollId) => dispatch(pollDelete(pollId));
  const thisPollVote = ({ id, username, items }) => dispatch(pollVote({ id, username, items }));

  return (
    <Poll
      pollRedux={pollRedux}
      pollNextId={pollNextId}
      usernameRedux={usernameRedux}
      toCreate={toCreate}
      toVote={toVote}
      pollSave={thisPollSave}
      pollDelete={thisPollDelete}
      pollVote={thisPollVote}
      handleModalClose={handleModalClose}
    />
  );
};

export default PollContainer;
