/* Action types */
const POLL_SAVE = 'poll/SAVE';
const POLL_DELETE = 'poll/DELETE';

/* Action functions */
export const poll_save = (poll) => ({ type: POLL_CREATE, data: poll });
export const poll_delete = (pollId) => ({ type: POLL_DELETE, data: pollId });

/* reducers functions */
const initialState = {
  polls: [],
};

function poll(state = initialState, action) {
  switch (action.type) {
    case POLL_SAVE:
      return {
        ...state,
        polls: state.polls.concat([action.data]),
      };

    case POLL_DELETE:
      return {
        ...state,
        polls: state.polls.reduce((acc, val, currIndex) => {
          if (!Array.isArray(acc)) {
            acc = [];
          }
          if (val != state.data) {
            acc.push(val);
          }
        }, []),
      };

    default:
      return state;
  }
}

export default poll;
