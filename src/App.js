import React,{Fragment} from 'react';
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./modules/home/components/Home";
import RestaurantDetails from "./modules/details_resto/components/RestaurantDetails";

const App=()=>{
    return (
      <Fragment>
        <header className="app-header">
          <div className="app-header-in">
              <h1 className="app-title">Foodie</h1>
          </div>
        </header>
        <main className="app-main">
          <div className="app-main-in">
              <AppRouter />
          </div>        
        </main>        
      </Fragment>
      
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
