import React from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
const $ = require('jquery');
import Home from './Home.jsx';
import Teams from './Teams.jsx';
import Schedule from './Schedule.jsx';


export default class Container extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/teams'>Teams</Link>
              <Link to='/schedule'>Schedule</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/teams' component={Teams}></Route>
            <Route path='/schedule' component={Schedule}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
