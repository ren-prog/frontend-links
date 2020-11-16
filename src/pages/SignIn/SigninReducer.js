import { setAccount, setToken, setRefreshToken } from "../../utils/account";
import { SIGN_IN } from "./SigninActions";

const INITIAL_STATE = {
  account: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
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

      return { ...INITIAL_STATE, account };

    default:
      return state;
  }
}
