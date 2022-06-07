import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/"><button className='nav-button'>Home</button></Link>
            <Link to="/Login"><button className='nav-button'>Login</button></Link>
            <button className='nav-button' >Logout</button>
            <Link to="/Shop"><button className='nav-button'>Shop</button></Link>
            <Link to="/cart"><button className='nav-button'>Cart</button></Link>
        </div>
    )
}

export default Navbar