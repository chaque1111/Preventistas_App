const initialState = {
  allClients: [],
  allProducts: [],
  allSellers: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_SELLERS":
      return {
        ...state,
        allSellers: payload,
      };

    case "GET_CLIENTS":
      return {
        ...state,
        allClients: payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: payload,
      };
    default:
      return state;
  }
}

export default reducer;
