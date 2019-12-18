import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <div className="m-5">
          <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          </BrowserRouter>
        </div>
    );
  }
}
