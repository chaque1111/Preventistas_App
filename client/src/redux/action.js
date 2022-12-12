import axios from "axios";

const localhost = "http://localhost:3001";
axios.defaults.baseURL = localhost;

export function getAllClients() {
  return async (dispatch) => {
    console.log("Hi!");
    const res = await axios("/clientes");
    return dispatch({ type: "GET_CLIENTS", payload: res.data });
  };
}
