import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div className="navi">
        
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repos</NavLink></li>
          </ul>
        </div>
        <div className="rightpara">
           {this.props.children}
        </div>
        </div>


    )
  }
})
