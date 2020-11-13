import { SIGN_IN } from "./SigninActions";

const INITIAL_STATE = {
  account: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
      return { ...INITIAL_STATE, account: payload };
    default:
      return state;
  }
}
