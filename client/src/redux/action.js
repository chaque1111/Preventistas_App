import axios from "axios";
import Cookies from "universal-cookie";
const localhost = "http://localhost:3001";
axios.defaults.baseURL = localhost;
const cookies = new Cookies();
export function getAllSellers() {
  return async (dispatch) => {
    const res = await axios("/vendedores");
    return dispatch({type: "GET_SELLERS", payload: res.data});
  };
}

export function getSellersId(id) {
  return async (dispatch) => {
    const res = await axios("/vendedores/" + id);
    return dispatch({type: "GET_SELLERS_ID", payload: res.data});
  };
}

export function getFilterSellers(payload) {
  return {
    type: "FILTER_BY_SELLERS",
    payload,
  };
}

export function getAllClients() {
  return async (dispatch) => {
    const res = await axios("/clientes");
    return dispatch({type: "GET_CLIENTS", payload: res.data});
  };
}
export function getClientById(id) {
  return async (dispatch) => {
    const client = await axios("/clientes/" + id);
    return dispatch({type: "GET_CLIENT_BY_ID", payload: client.data});
  };
}
export function getClientsBySeller(id) {
  return async (dispatch) => {
    const res = await axios("/clientes/seller/" + id);
    return dispatch({type: "CLIENTS_BY_SELLER", payload: res.data});
  };
}

export function getAllProducts() {
  return async (dispatch) => {
    const res = await axios("/inventario");
    return dispatch({type: "GET_PRODUCTS", payload: res.data});
  };
}

export function logIng(seller) {
  return async (dispatch) => {
    const res = await axios.put("/vendedores/log", seller);
    if (!res.data) {
      return false;
    } else {
      return dispatch({type: "LOG_ING", payload: res.data});
    }
  };
}

export function getLocalidades(id) {
  return async (dispatch) => {
    const localidades = await axios("/clientes/localidades/" + id);
    return dispatch({type: "GET_LOCALIDADES", payload: localidades.data});
  };
}

export function refresh() {
  return async (dispatch) => {
    return dispatch({type: "REFRESH"});
  };
}

export function searchClient(input) {
  return async (dispatch) => {
    try {
      let id = cookies.get("userId");
      let obj = {
        id: id,
        name: input,
      };
      const searchClients = await axios.put("/clientes/search", obj);
      return dispatch({type: "SEARCH_CLIENT", payload: searchClients.data});
    } catch (error) {
      window.alert(error.response.data);
    }
  };
}

export function filterClients() {
  return async (dispatch) => {
    try {
      let filters = {
        localidad: cookies.get("Localidad"),
        activo: cookies.get("BoolActivo"),
      };
      const clients = await axios.put("/clientes/filters", filters);
      return dispatch({type: "FILTER_CLIENTS", payload: clients.data});
    } catch (error) {
      window.alert(error.response.data);
    }
  };
}
export function getProductId(id) {
  return async (dispatch) => {
    const res = await axios("/inventario/" + id);
    return dispatch({type: "GET_PRODUCT_ID", payload: res.data});
  };
}

export function getOrderNumber() {
  return async (dispatch) => {
    const res = await axios("/transacciones/pedido");
    return dispatch({type: "GET_ORDER_NUMBER", payload: res.data});
  };
}

export function changeOrderNumber(id) {
  const modify = id + 1;

  return async (dispatch) => {
    const res = await axios.put("/transacciones/pedido/" + modify);
    return res.json;
  };
}

export function postTransac(payload) {
  return async function (dispatch) {
    try {
      const res = await axios.post("/transacciones/", payload);

      return res;
    } catch (error) {
      if (error.response) {
        return alert(error.response.data);
      }
    }
  };
}

export function openTransaction() {
  return {type: "OPEN_TRANSACTION"};
}

export function closeTransaction() {
  return {type: "CLOSE_TRANSACTION"};
}
