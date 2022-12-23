const initialState = {
  allClients: [],
  client: "",
  seller: "",
  selectClients: {},
  allProducts: [],
  allSellers: [],
  productId: {},
  orderNumber: "",
  estado: true,
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
        seller: payload.name,
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

    case "GET_CLIENTS_ID":
      return {
        ...state,
        client: payload.name,
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

    case "OPEN_TRANSACTION":
      return {
        ...state,
        estado: false,
      };

    case "CLOSE_TRANSACTION":
      return {
        ...state,
        estado: true,
      };

    default:
      return state;
  }
}

export default reducer;
