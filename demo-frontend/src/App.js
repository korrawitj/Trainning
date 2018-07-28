import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
