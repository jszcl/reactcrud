import React from 'react'
import NavLink from './NavLink'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div className="navi">
        
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/transtool">小工具</NavLink></li>
          </ul>
        </div>
        <div className="rightpara">
           {this.props.children}
        </div>
        </div>


    )
  }
})
