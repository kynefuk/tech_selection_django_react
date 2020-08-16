import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { TopPage } from './TopPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from './Auth';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Auth>
          <Switch>
            <Route path='/top' component={TopPage}></Route>
          </Switch>
        </Auth>
      </Switch>
    </div>
  );
};

export default App;
