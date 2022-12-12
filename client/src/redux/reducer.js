const initialState = {
  allClients: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_CLIENTS":
      return {
        ...state,
        allClients: payload,
      };
    default:
      return state;
  }
}

export default reducer;
