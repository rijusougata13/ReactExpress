const initialState = {
  blogsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BLOGS_SUCCESS":
      return {
        ...state,
        blogsList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
