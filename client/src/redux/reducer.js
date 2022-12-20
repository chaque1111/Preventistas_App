const initialState = {
  allClients: [],
  selectClients: {},
  allProducts: [],
  allSellers: [],
  productId: {},
  orderNumber: "",
};

function reducer(state = initialState, { type, payload }) {
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

    case "GET_PRODUCT_ID":
      return {
        ...state,
        productId: payload,
      };

    case "GET_ORDER_NUMBER":
      return {
        ...state,
        orderNumber: payload,
      };

    default:
      return state;
  }
}

export default reducer;
