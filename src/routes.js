import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.js';

render(
  <Router history= { browserHistory}>
    <Route path='/' component={App} />
  </Route>
  ,document.getElementById('root')
)
