import React from "react";
import Nav from "./components/Nav";
import Home from "./Home";
import Statistics from "./Statistics";
import Reservations from "./Reservations";
import garageGenerator from "./garageGenerator";
import Calendar from "./Calendar";
import Overview from "./Overview";
import Loading from "./components/Loading";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import Pricing from "./Pricing";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import history from "./utils/history";
import EditLayout from "./EditLayout";
{
    /* Loads Page when Logging In*/
}
function App() {
    const { loading } = useAuth0();
    {
        /* Looding Icon*/
    }
    if (loading) {
        return <Loading />;
    } else {
        /* Router connects each website page together*/
    }
    return (
        <MemoryRouter>
            <Router history={history}>
                <Nav />
                <Switch>
                    {/* Home Page */}
                    <Route exact path="/" component={Home} />
                    {/*Home Page */}
                    <Route exact path="/home" component={Home} />{" "}
                    {/* Calendar Page */}
                    <PrivateRoute path="/calendar" component={Calendar} />{" "}
                    {/* Statistics Page */}
                    <PrivateRoute path="/statistics" component={Statistics} />
                    {/* Overview Page */}
                    <PrivateRoute path="/overview" component={Overview} />
                    {/* Reservations Page */}
                    <PrivateRoute
                        path="/reservations"
                        component={Reservations}
                    />
                    {/* Pricing Page */}
                    <PrivateRoute path="/pricing" component={Pricing} />
                    {/* EditLayout Page */}
                    <PrivateRoute path="/editlayout" component={EditLayout} />
                </Switch>
            </Router>
        </MemoryRouter>
    );
}
export default App;
