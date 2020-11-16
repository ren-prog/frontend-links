import { apiPost } from "../services/api";
export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

export const actionSignIn = (data) => {
  const payload = apiPost("/auth/sign-in", data);
  return { type: SIGN_IN, payload };
};

export const actionSignUp = (data) => {
  const payload = apiPost("/auth/sing-up", data);
  return { type: SIGN_UP, payload };
};

export const actionSignOut = (data) => {
  return { type: SIGN_OUT, payload: {} };
};
