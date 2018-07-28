import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import Blog from './containers/Blog/Blog';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
