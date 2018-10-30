import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Main from './components/Main'
import Episode from './components/Episode'
import About from './components/About'
import Android from './components/Android'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/android' component={Android} />
          <Route path='/:id' component={Episode} />
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
