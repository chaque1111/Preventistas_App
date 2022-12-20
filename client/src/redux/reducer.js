const initialState = {
  allClients: [],
  selectClients: {},
  allProducts: [],
  allSellers: [],
  user: [],
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case "GET_SELLERS":
      return {
        ...state,
        allSellers: payload,
      };

    case "GET_SELLERS_ID":
      return {
        ...state,
        selectClients: payload,
      };

    case "FILTER_BY_SELLERS":
      const allSellers = state.allSellers;

      const sellerFilter = allSellers.filter(
        (el) => el.vendedor.name === payload
      );

      return {
        ...state,
        selectClients: sellerFilter,
      };

    case "GET_CLIENTS":
      return {
        ...state,
        allClients: payload,
        // selectClients: payload,
      };

    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: payload,
      };

    case "LOG_ING":
      return {
        ...state,
        user: payload,
      };

    case "REFRESH":
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
}

export default reducer;
