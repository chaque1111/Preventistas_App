import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

import Nav from "./components/Nav/Nav.jsx";
import Clients from "./components/Clients/Clients";
import Sellers from "./components/Sellers/Sellers";
import FormTrans from "./components/FormTrans/FormTrans";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/sellers" component={Sellers} />
      <Route exact path="/transactions" component={FormTrans} />
    </div>
  );
}

export default App;
