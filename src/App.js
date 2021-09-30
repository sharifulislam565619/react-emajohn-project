import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./compunents/Header/Header";
import Inventory from "./compunents/Inventory/Inventory";
import NotFoud from "./compunents/NotFound/NotFoud";
import Order from "./compunents/Order/Order";
import Shop from "./compunents/Shop/Shop";


function App() {

  return (


    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/home">
          <Shop />
        </Route>
        <Route exact path="/order">
          <Order />
        </Route>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
        <Route path="*">
          <NotFoud></NotFoud>
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
