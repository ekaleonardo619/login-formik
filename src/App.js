import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import Page404 from './Page404';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
