/* Action types */
const AUTH_LOGIN = 'auth/LOGIN';
const AUTH_LOGOUT = 'auth/LOGOUT';

/* Action functions */
export const authLogin = (name) => ({
  type: AUTH_LOGIN,
  name,
});
export const authLogout = (name) => ({
  type: AUTH_LOGOUT,
  name,
});

/* reducers functions */
const initialState = {
  logged: false,
  name: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        name: action.name,
        logged: action.name.trim() !== '',
      };

    case AUTH_LOGOUT:
      // return {
      //   ...state,
      //   name: action.name.trim() === state.name.trim() ? '' : action.name,
      //   logged: action.name.trim() !== state.name.trim(),
      // };
      return {
        name: '',
        logged: false,
      };

    default:
      return state;
  }
}
