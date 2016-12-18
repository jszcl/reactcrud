import React from 'react'
import NavLink from './NavLink'
import { Menu, Dropdown, Icon } from 'antd'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    
    return (
      <div className="container">
        <div className="navi">
        
          <ul role="nav" className="navigation">
            <li><NavLink to="/" onlyActiveOnIndex><p className='navp'>HOME<Icon type="home" /></p></NavLink></li>
            <li><NavLink to="/Crud"><p className='navp' >CRUD<Icon type="bars" /></p></NavLink></li>
            <li><NavLink to="/edit"><p className="editofnav">EDIT</p></NavLink></li>
            <li><NavLink to="/transtool"><p className='navp'>TOOL<Icon type="bulb" /></p></NavLink></li>
            <li><NavLink to="/cookies"><p className='navp'>STAT<Icon type="team" /></p></NavLink></li>
            <li><NavLink to="/about"><p className='navp'>ABOUT<Icon type="team" /></p></NavLink></li>
          </ul>
        </div>
        <div className="rightpara">
           {this.props.children}
        </div>
        </div>


    )
  }
})
