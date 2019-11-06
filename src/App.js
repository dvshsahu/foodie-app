import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./modules/home/components/Home";
import RestaurantDetails from "./modules/details_resto/components/RestaurantDetails";

const App=()=>{
    return (
      <AppRouter />
    );
  }


/**
 * component for routing
 */
const AppRouter=()=>(
<Router>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurant/:id" component={RestaurantDetails} />
  </Switch>
</Router>);

export default App;
