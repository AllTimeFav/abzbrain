import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
        <div className="navbar">
            <div>
                <h3>TODOs</h3>
            </div>
            <div className="options">
                <Link to='/'>
                    <h4>Home</h4>
                </Link>
                <Link to='/todos'>
                    <h4>Todos</h4>
                </Link>
                <Link to='/about'>
                    <h4>About Us</h4>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar2