import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {getAllSellers, logIng, refresh} from "../../redux/action";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "universal-cookie";

export default function LandingPage() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const history = useHistory();
  const sellers = useSelector((state) => state.allSellers);
  const userSession = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [seller, setSeller] = useState({
    id: "",
    password: "",
  });

  const handleSelect = (e) => {
    if (e.target.value != 2) {
      setMessage("usted es un vendedor, coloque su contraseña");
    } else if (e.target.value == 2) {
      setMessage("usted es un administrador, digite su contraseña");
    }
    setSeller({
      ...seller,
      id: e.target.value,
    });
  };

  const handleChanguePassword = (e) => {
    setSeller({
      ...seller,
      password: e.target.value,
    });
  };

  const submit = async () => {
    dispatch(refresh());
    const loaded = await dispatch(logIng(seller)).then((res) =>
      res === false ? false : true
    );
    if (!loaded) {
      return alert("contraseña incorrecta");
    } else {
      history.push("/user");
    }
  };

  useEffect(() => {
    if (cookies.get("userName")) {
      history.push("/user");
    }
    dispatch(getAllSellers());
  }, []);

  return (
    <div className='container'>
      <h1>Bienvenido</h1>
      <p>seleccione que vendedor es</p>

      <select onChange={(e) => handleSelect(e)} name='selector'>
        {sellers.length &&
          sellers.map((e) => (
            <option key={e.vendedor.id} value={e.vendedor.id}>
              {e.vendedor.name}
            </option>
          ))}
      </select>
      {message.length ? <p>{message}</p> : ""}
      <p>contraseña</p>
      <input type='password' onChange={(e) => handleChanguePassword(e)} />

      <button onClick={(e) => submit(e)}>iniciar sesion</button>
    </div>
  );
}
