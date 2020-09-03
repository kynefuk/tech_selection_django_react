import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { TopPage } from './components/TopPage';
import { Auth } from './components/Auth';
import { Fruit } from './components/Fruit';
import { Form } from './components/Fruit/Form';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Auth>
          <Switch>
            <Route path="/top" component={TopPage}></Route>
            <Route path="/fruits" exact component={Fruit}></Route>
            <Route path="/fruits/new" exact component={Form}></Route>
            <Route path="/fruits/:id" exact component={Form}></Route>
          </Switch>
        </Auth>
      </Switch>
    </div>
  );
};

export default App;
