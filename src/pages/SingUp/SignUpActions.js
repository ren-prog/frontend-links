import { apiPost } from "../../services/api";

export const SIGN_UP = "SIGN_UP";

export const actionSignUp = (data) => {
  const payload = apiPost("/auth/sing-up", data);
  return { type: SIGN_UP, payload };
};
