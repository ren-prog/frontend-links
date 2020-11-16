import { apiPost } from "../../services/api";
export const SIGN_IN = "SIGN_IN";

export const actionSignIn = (data) => {
  const payload = apiPost("/auth/sign-in", data);
  return { type: SIGN_IN, payload };
};
