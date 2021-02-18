/**
 * poll: {
 * id,
 * userId,
 * title,
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
const POLL_VOTE = 'poll/VOTE';

/* Action functions */
let nextId = 1;
export const pollSave = (payload) => ({
  type: POLL_SAVE,
  poll: {
    id: payload.id,
    username: payload.username,
    title: payload.title,
    startDate: payload.startDate,
    endDate: payload.endDate,
    items: payload.items,
    isInProgress: payload.isInProgress,
    isDone: payload.isDone,
    result: payload.id ? payload.result : null,
    votedUsers: payload.id ? payload.votedUsers : [],
  },
});
export const pollDelete = (pollId) => ({ type: POLL_DELETE, pollId });
export const pollVote = (payload) => ({ type: POLL_VOTE, payload });

/* reducers functions */
const initialState = {
  polls: [],
  nextId: 1,
};

export default function poll(state = initialState, action) {
  switch (action.type) {
    case POLL_SAVE:
      return {
        polls: state.polls.concat([action.poll]),
        nextId: nextId,
      };

    case POLL_DELETE:
      return {
        polls: state.polls.filter((p) => p.id !== action.pollId),
      };

    case POLL_VOTE:
      return {
        polls: state.polls.map((p) => {
          if (p.id === action.payload.id) {
            if (!p.votedUsers.includes(action.payload.username)) {
              return {
                id: p.id,
                username: p.username,
                title: p.title,
                startDate: p.startDate,
                endDate: p.endDate,
                items: action.payload.items,
                isInProgress: action.payload.isInProgress,
                isDone: action.payload.isDone,
                result: p.result,
                votedUsers: p.votedUsers.concat([action.payload.username]),
              };
            }
          }

          return p;
        }),
      };

    default:
      return state;
  }
}
