import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}>
          ログイン
        </Route>
      </Switch>
    </div>
  );
};

export default App;
