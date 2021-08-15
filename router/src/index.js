import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom"
import User from './User';
import Visit from './Visit';
import NotFound from './NotFound';
import ServiceWorker from './ServiceWorker';

const routing=(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/visit">Visit</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>
    </div>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/user" component={User} />
    <Route path="/visit" component={Visit} />
    <Route path="/service" component={ServiceWorker} />
    <Route component={NotFound} />
    
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


