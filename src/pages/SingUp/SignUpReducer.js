import { SIGN_UP } from "./SignUpActions";

const INITIAL_STATE = {
  account: null,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP:
      return { ...INITIAL_STATE, account: { ...payload, sucess: true } };
    default:
      return state;
  }
}
