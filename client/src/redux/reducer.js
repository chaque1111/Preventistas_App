import Cookies from "universal-cookie";

const initialState = {
  allClients: [],
  selectClient: [],
  clienstBySeller: [],
  allProducts: [],
  product: {},
  allSellers: [],
  user: [],
};

function reducer(state = initialState, {type, payload}) {
  const cookie = new Cookies();
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

    case "GET_PRODUCTS":
      return {
        ...state,
        allProducts: payload,
      };

    case "LOG_ING":
      cookie.set("userId", payload.id, {path: "/"});
      cookie.set("userName", payload.name, {path: "/"});
      cookie.set("userlocalidad", payload.localidad, {path: "/"});
      return {
        ...state,
        user: payload,
      };
    ///clientes
    case "GET_CLIENTS":
      return {
        ...state,
        allClients: payload,
      };
    case "CLIENTS_BY_SELLER":
      return {
        ...state,
        clienstBySeller: payload,
      };
    case "GET_CLIENT_BY_ID":
      return {
        ...state,
        selectClient: payload,
      };
    case "SEARCH_CLIENT":
      return {
        ...state,
        clienstBySeller: payload,
      };
    //products
    case "GET_PRODUCT":
      return {
        ...state,
        product: payload,
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
