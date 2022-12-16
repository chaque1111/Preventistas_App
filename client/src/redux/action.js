import axios from "axios";

const localhost = "http://localhost:3001";
axios.defaults.baseURL = localhost;

export function getAllSellers() {
  return async (dispatch) => {
    const res = await axios("/vendedores");
    return dispatch({ type: "GET_SELLERS", payload: res.data });
  };
}

export function getSellersId(id) {
  return async (dispatch) => {
    const res = await axios("/vendedores/" + id);
    return dispatch({ type: "GET_SELLERS_ID", payload: res.data });
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
    return dispatch({ type: "GET_CLIENTS", payload: res.data });
  };
}

export function getAllProducts() {
  return async (dispatch) => {
    const res = await axios("/inventario");
    return dispatch({ type: "GET_PRODUCTS", payload: res.data });
  };
}
