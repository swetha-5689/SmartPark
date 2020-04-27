/* Charles Owen
* Primary control page for the front
* end routes.
*/
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import Graph from './components/Graph'
import Button from './components/button';
import PriceAdmin from './components/PriceAdmin';
import ViewCurrent from './components/ViewCurrent';
import EditWeights from './components/EditWeights';
import PriceModelComparison from './components/PriceModelComparison';


function App() {

  return (
    <Router>
    <div className="App">
      <AppNavBar></AppNavBar>
      <br/>
      <Route path = "/" exact component={PriceAdmin} />
      <Route path = "/viewCurrent" component = {ViewCurrent} />
      <Route path = "/editWeights" component = {EditWeights} />
      <Route path = "/priceModelComparison" component = {PriceModelComparison} />
    </div>
    </Router>
  );
}

export default App;
