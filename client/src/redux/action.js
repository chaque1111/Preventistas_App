import axios from "axios";

const localhost = "http://localhost:3001";
axios.defaults.baseURL = localhost;

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
