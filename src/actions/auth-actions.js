const FETCH_AUTH = "fetchAuth";
const SET_LOGIN_ACTIVE = "setLoginActive";
const SET_REGISTER_ACTIVE = "setRegisterActive";

export default {
  FETCH_AUTH,
  fetchAuth: () => ({ type: FETCH_AUTH }),
  SET_LOGIN_ACTIVE,
  setLoginActive: () => ({ type: SET_LOGIN_ACTIVE }),
  SET_REGISTER_ACTIVE,
  setRegisterActive: () => ({ type: SET_REGISTER_ACTIVE }),
};
