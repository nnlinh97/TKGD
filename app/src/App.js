import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products/:id' component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
