import {React, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Cookies from "universal-cookie";
export default function () {
  const history = useHistory();
  const userSession = useSelector((state) => state.user);
  const cookie = new Cookies();
  const logout = () => {
    cookie.remove("userName", {path: "/"});
    cookie.remove("userId", {path: "/"});
    history.push("/");
  };
  return (
    <div>
      <h1>id: {cookie.get("userId")}</h1>
      <h1>Hola: {cookie.get("userName")}</h1>
      <h2>Localidad: {cookie.get("userlocalidad")} </h2>
      <button onClick={() => logout()}>cerrar sesion</button>
    </div>
  );
}
