import React from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Edit from "./Edit";
import Billing from "./Billing";
import CreditCard from "./CreditCard";
import AddVehicle from "./AddVehicle";
import Account from "./Account";

import Loading from "./components/Loading";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";

import Make from "./Make";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import Profile from "./components/Profile";
import history from "./utils/history";
import MakeReservation from "./Make";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  } else
    return (
      <MemoryRouter>
        <Router history={history}>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />

            <PrivateRoute path="/Edit" component={Edit} />
            <PrivateRoute path="/Make" component={MakeReservation} />
            <PrivateRoute path="/Billing" component={Billing} />
            <PrivateRoute path="/Account" component={Account} />
            <PrivateRoute path="/CreditCard" component={CreditCard} />
            <PrivateRoute path="/AddVehicle" component={AddVehicle} />
          </Switch>
        </Router>
      </MemoryRouter>
    );
}

export default App;
