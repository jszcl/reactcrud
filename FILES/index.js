import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { render } from 'react-dom';
import App from './components/App.js'
import Home from './components/Home'
import About from './components/About'
import transtool from './components/transtool'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/transtool" component={transtool}/>
    </Route>
  </Router>
), document.getElementById('root'))
