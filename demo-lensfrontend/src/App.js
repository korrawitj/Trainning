import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './hoc/Layout/Layout';
import Login from './components/Login/Login';
import About from './components/About/About';
import Howtorent from './components/Howtorent/Howtorent';
import Product from './components/Product/Product';
import ProductItemDetail from './components/ProductItemDetail/ProductItemDetail';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Howtorent" component={Howtorent} />
            <Route exact path="/AllProduct" component={Product}/>
            <Route exact path="/ProductDetail" component={ProductItemDetail}/>
            <Route exact path="/Register" component={Register}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
