export const fetchUserSuccess = (token) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: token,
  };
};
