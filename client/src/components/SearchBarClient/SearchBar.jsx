import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Cookies from "universal-cookie";
import {searchClient} from "../../redux/action";

export default function ({setPage}) {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [inputObj, setInputObj] = useState({
    sellerId: cookies.get("userId"),
    nameClient: "",
  });

  const handleChangueInput = (e) => {
    setInputObj({
      ...inputObj,
      nameClient: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (inputObj.nameClient === "") {
      return alert("por favor, ingresa un nombre");
    }
    dispatch(searchClient(inputObj));
    setInputObj({
      ...inputObj,
      nameClient: "",
    });
    setPage(1);
  };
  return (
    <div>
      <input
        type='text'
        onChange={(e) => handleChangueInput(e)}
        value={inputObj.nameClient}
        placeholder='cliente'
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>
        buscar
      </button>
    </div>
  );
}
