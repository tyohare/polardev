import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    
  return (

    <div className='nav'>
      <header>
        <h2 className="logo"><Link to="/">Polar.Dev</Link></h2>
        <div className='menu'>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href='https://www.github.com/tyohare'> Github </a></li>
          </ul>
          </div>

        </header>
    </div>
      
  )
}

export default NavBar