import {
  setAccount,
  setToken,
  setRefreshToken,
  removeAccount,
  removeToken,
  removeRefreshToken,
} from "../utils/account";
import { SIGN_UP, SIGN_OUT } from "../actions/AccountActions";
import { SIGN_IN } from "../actions/AccountActions";

const INITIAL_STATE = {
  account: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      const response = payload ? payload.data : null;
      const account = response ? response.data : null;
      const metadata = response ? response.metadata : null;

      const token = metadata ? metadata.token : null;
      const refreshToken = metadata ? metadata.refreshToken : null;

      if (account) setAccount(account);
      if (token) setToken(token);
      if (refreshToken) setRefreshToken(refreshToken);

      console.log("*** SignUpReducer.account", account);
      console.log("*** SignUpReducer", token);
      console.log("*** SignUpReducer", refreshToken);

      return { ...state, account };

    case SIGN_OUT:
      removeAccount(account);
      removeToken(token);
      removeRefreshToken(refreshToken);
      return { ...INITIAL_STATE, account: null };

    default:
      return state;
  }
}
