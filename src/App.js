import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import Order from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";


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
        <Route path="/orderPlace">
          <OrderPlace></OrderPlace>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
