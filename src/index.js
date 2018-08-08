import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SingleEpisode from './components/SingleEpisode';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/SingleEpisode/:episode_number" component={SingleEpisode} />
      <Route path="/" component={App} exact={true} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
