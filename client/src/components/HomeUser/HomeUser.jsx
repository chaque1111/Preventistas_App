import {React, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import Cookies from "universal-cookie";
export default function () {
  const history = useHistory();
  const cookie = new Cookies();

  const logout = () => {
    cookie.remove("userName", {path: "/"});
    cookie.remove("userId", {path: "/"});
    history.push("/");
  };
  return (
    <div>
      <button onClick={() => logout()}>cerrar sesion</button>
      <h1>Hola {cookie.get("userName")}</h1>
      <h1>id: {cookie.get("userId")}</h1>
      <h1>a qué seccion quieres ir?</h1>

      <Link to='/clients'>
        <button>clientes</button>
      </Link>
      <Link to='/transactions'>
        <button>transaccion</button>
      </Link>
      <Link to='/products'>
        <button>Productos</button>
      </Link>
    </div>
  );
}
