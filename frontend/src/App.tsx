import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { TopPage } from './components/TopPage';
import { Auth } from './components/Auth';
import { Fruit } from './components/Fruit';
import { Register } from './components/Fruit/Register';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Auth>
          <Switch>
            <Route path="/top" component={TopPage}></Route>
            <Route path="/fruits" exact component={Fruit}></Route>
            <Route path="/fruits/new" exact component={Register}></Route>
            <Route path="/fruits/:id" exact component={Register}></Route>
          </Switch>
        </Auth>
      </Switch>
    </div>
  );
};

export default App;
