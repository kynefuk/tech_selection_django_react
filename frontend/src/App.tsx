import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { TopPage } from './TopPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/top' component={TopPage}></Route>
      </Switch>
    </div>
  );
};

export default App;
