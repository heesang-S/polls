/**
 * poll: {
 * id,
 * userId,
 * startDate,
 * endDate,
 * items,
 * result
 * }
 *
 */

/* Action types */
const POLL_SAVE = 'poll/SAVE';
const POLL_DELETE = 'poll/DELETE';

/* Action functions */
let nextId = 1;
export const pollSave = (partial_poll) => ({
  type: POLL_SAVE,
  poll: {
    id: partial_poll.id ? partial_poll.id : nextId++,
    userId: partial_poll.userId,
    title: partial_poll.title,
    startDate: partial_poll.startDate,
    endDate: partial_poll.endDate,
    items: partial_poll.items,
    result: partial_poll.result,
  },
});
export const pollDelete = (pollId) => ({ type: POLL_DELETE, pollId });

/* reducers functions */
const initialState = {
  polls: [],
};

export default function poll(state = initialState, action) {
  switch (action.type) {
    case POLL_SAVE:
      return {
        ...state,
        polls: state.polls.concat([action.poll]),
      };

    case POLL_DELETE:
      return {
        ...state,
        polls: state.polls.filter((p) => p.id !== action.pollId),
      };

    default:
      return state;
  }
}
