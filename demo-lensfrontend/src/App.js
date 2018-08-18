import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import Blog from './containers/Blog/Blog';
import About from './components/About/About';
import Howtorent from './components/Howtorent/Howtorent';
import Product from './components/Product/Product';
import ProductItemDetail from './components/ProductItemDetail/ProductItemDetail';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Howtorent" component={Howtorent} />
            <Route exact path="/AllProduct" component={Product}/>
            <Route exact path="/ProductDetail" component={ProductItemDetail}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
