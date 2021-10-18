import { BrowserRouter, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderPlace from "./components/OrderPlace/OrderPlace";
import Order from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Shipping from "./components/Shipping/Shipping";


function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/home">
            <Shop />
          </Route>
          <PrivetRoute exact path="/order">
            <Order />
          </PrivetRoute>
          <PrivetRoute path="/shipping">
            <Shipping></Shipping>
          </PrivetRoute>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/orderPlace">
            <OrderPlace></OrderPlace>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>


  );
}

export default App;


