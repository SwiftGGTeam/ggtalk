import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Main from './components/Main'
import Episode from './components/Episode'
import About from './components/About'
import FAQ from './components/FAQ'
import Search from './components/Search'
import Android from './components/Android'
import ListenerGuide from './components/ListenerGuide'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/faq' component={FAQ} />
          <Route path='/search' component={Search} />
          <Route path='/android' component={Android} />
          <Route path='/guide' component={ListenerGuide} />
          <Route path='/:id' component={Episode} />
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
