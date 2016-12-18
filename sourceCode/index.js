import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import App from './components/App.js'
import Home from './components/Home'
import Editor from './components/Editor'
import Transtool from './components/transtool'
import Cookies from './components/cookies'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Crud from './components/Crud'
import { createStore } from 'redux'
import lists from './reducer/reducers'
import { Provider } from 'react-redux'
import Cookiecover from './containers/cookiescontainer'
import  abouts from './components/abouts'

const store = createStore(lists)
function listener (){console.log(store.getState())

}
store.subscribe(listener);

render((
<Provider store={store}	>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/edit" component={Editor}/>
      <Route path="/transtool" component={Transtool}/>
      <Route path="/cookies" component={Cookiecover}/>
      <Route path="/crud" component={Crud}/>
      <Route path="/about" component={abouts}/>
    </Route>
  </Router>
 </Provider>
), document.getElementById('root'))
