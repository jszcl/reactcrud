import React from 'react'
import welcome from '../welcome.png'
import github from '../github.png'
export default React.createClass({
  render() {
    return <div className="home"><img src={welcome}/><a className='git' href= 'https://github.com/jszcl'><img src={github} /></a></div>
  }
})
