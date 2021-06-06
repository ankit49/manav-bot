import authAction from "../actions/auth-actions";

const initialState = {
  loginVisibility: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAction.FETCH_AUTH:
      return state;
    case authAction.SET_REGISTER_ACTIVE:
      return {
        ...state,
        loginVisibility: false,
      };
    case authAction.SET_LOGIN_ACTIVE:
      return {
        ...state,
        loginVisibility: true,
      };
    default:
      return initialState;
  }
};
