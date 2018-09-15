import React from 'react';
import Sidebar from './sidebar/sidebar';
import Dashboard from './main/dashboard';
import ExperimentIndex from './main/experiment_index';
import ExperimentDetail from './main/experiment_detail';
import { Switch, Route, HashRouter } from 'react-router-dom';

const App = () => (
  <div id="outer-container">

    <HashRouter>
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/experiments" component={ExperimentIndex} />
          <Route exact path="/experiments/:experimentId" component={ExperimentDetail} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
