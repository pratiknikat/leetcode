const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  ADDPROBLEMTOUSER: BASE_URL + "/auth/addproblemtouser",
  SHOWPROFILE: BASE_URL + "/auth/showprofile",
  ADD_PROBLEM: BASE_URL + "/problem/addproblem",
};
export const problemApi = {
  SHOW_PROBLEM_API: BASE_URL + "/problem/showproblem",
  COMPILE_CODE_API: BASE_URL + "/problem/complie",
  GET_ALL_PROBLEM: BASE_URL + "/problem/showallproblem",
};

export const playgroundApi = {
  COMPILE_CODE_API: BASE_URL + "/playground/compile",
};
