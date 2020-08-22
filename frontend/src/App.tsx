import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { TopPage } from './components/TopPage';
import { Auth } from './components/Auth';
import { Fruit } from './components/Fruit';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Auth>
          <Switch>
            <Route path="/top" component={TopPage}></Route>
            <Route path="/fruits" component={Fruit}></Route>
          </Switch>
        </Auth>
      </Switch>
    </div>
  );
};

export default App;
