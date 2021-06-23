const initialState = {
  userName: "",
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
