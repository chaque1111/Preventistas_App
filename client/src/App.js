import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/Home/Home.jsx";

import Nav from "./components/Nav/Nav.jsx";
import Clients from "./components/Clients/Clients";
import Sellers from "./components/Sellers/Sellers";
import FormTrans from "./components/FormTrans/FormTrans";

function App() {
  const state = useSelector((state) => state.estado);
  console.log(state);
  if (state === true) {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/transactions" component={FormTrans} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/sellers" component={Sellers} />
        <Route exact path="/transactions" component={FormTrans} />
      </div>
    );
  }
}

export default App;
