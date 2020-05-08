import React, { Component } from "react";
import "./App.css"; //importing the App.css file to make it look pretty
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap is to make the components that are prettier than normal react components
import AppNavBar from "./AppNavBar"; //import the navigation bar
import Home from "./Home"; //importing the different JS pages for the app
import Scanned from "./Scanned";
import NotScanned from "./NotScanned";
import Found from "./Found";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //importing the react-router-dom to help link multiple JS pages together
//the main page that links all the other pages together
function App() {
  return (
    <Router>
      {" "}
      {/*this is the Router tag which helps in linking the components to different JS pages in the same app*/}
      <div className="App">
        {" "}
        {/*this is the class name with the different components rendered in this file */}
        <AppNavBar /> {/*this is the Navigation Bar for the Spot UI page */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/*the address of the this page has a slash after it, it follows for the next few pages*/}
          <Route path="/scanned" component={Scanned} />
          <Route path="/notScanned" component={NotScanned} />
          <Route path="/found" component={Found} />
          <Route path="/notFound" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
