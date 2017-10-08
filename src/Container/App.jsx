import React from 'react';
import { Component } from 'react';
import { BrowserRouter, IndexRoute, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import NotFound from 'Page/NotFound';
import Landing from 'Page/Landing';

export default class App extends Component {
  render() {
    return (
      <Landing />
    );
  }
}