import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import PlayGameContainer from '../containers/PlayGameContainer';
const Base = () => (
  <Router>
    <Route path='/' component={PlayGameContainer} />
  </Router>
);

export default Base;
