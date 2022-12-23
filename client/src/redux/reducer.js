import Cookies from "universal-cookie";

const initialState = {
  allClients: [],
  clienstBySeller: [],
  client: "",
  seller: "",
  allProducts: [],
  allSellers: [],
  user: [],
  productId: {},
  orderNumber: "",
  estado: true,
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
    case "REFRESH":
      return {
        ...state,
        user: [],
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
