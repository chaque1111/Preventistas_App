import "./App.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Clients from "./components/Clients/Clients";
import Sellers from "./components/Sellers/Sellers";
import FormTrans from "./components/FormTrans/FormTrans";
import LandingPage from "./components/LandingPage/LandingPage";
import HomeUser from "./components/HomeUser/HomeUser";
import {useSelector} from "react-redux";
import ClientDetail from "./components/ClientDetail/ClientDetail";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/user' component={HomeUser}></Route>
      <Route exact path='/home' component={Home} />
      <Route exact path='/clients' component={Clients} />
      <Route exact path='/transactions' component={FormTrans} />
      <Route exact path='/sellers' component={Sellers} />
      <Route exact path='/products' component={Products}></Route>
      <Route exact path='/detail/:id' component={ClientDetail} />
      <Route exact path='/product/:id' component={ProductDetail}></Route>
    </div>
  );
}

export default App;
