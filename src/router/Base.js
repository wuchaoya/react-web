import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import PlayGameContainer from '../containers/PlayGameContainer';
import CloudPlayContainer from '../containers/CloudPlayContainer';
const Base = () => (
  <Router>
    <div>
      <Route exact path='/' component={PlayGameContainer} />
      <Route path='/topics/:id' component={CloudPlayContainer} />
    </div>
  </Router>
);

export default Base;
