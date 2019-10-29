import React from 'react';
import Users from "./Users/index";
import Login from "./Login/index";
import PrivateRoute from "./privateRoute";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
            <PrivateRoute path="/users" component={Users} exact>
            </PrivateRoute>
            <Route path="/" exact component={Login}>
            </Route>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>
  );
}

export default App;
