import React from 'react';
import { Component } from 'react';
import { BrowserRouter, IndexRoute, Route, Redirect } from 'react-router-dom';

import NotFound from 'Page/NotFound';

export default class App extends Component {
  render() {
    return (
      <NotFound />
    );
  }
}