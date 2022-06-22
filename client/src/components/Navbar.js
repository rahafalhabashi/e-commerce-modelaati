// import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './modelaatilogo.png'
import {useNavigate} from 'react-router-dom'
// import Cart from './Cart'

function Navbar({ onLogout, setCart }) {
    // const [btnPopup, setBtnPopup] = useState(false)
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
        navigate('/')
    }

    return (
        <div>
            <div className='App-header' align='center'>
                <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo" /></Link>
            </div>
            <div className='App-header' align='center'>
                <Link to="/"><button className='nav-button'>Home</button></Link>
                <Link to="/Login"><button className='nav-button'>Login</button></Link>
                <button className='nav-button' onClick={handleLogout} >Logout</button>
                {/* <Link to="/Shop"><button className='nav-button'>Shop</button></Link> */}
                <button className='nav-button' onClick={() => navigate('/cart')} >Cart</button>
                <Link to="/Profile"><button className='nav-button'>Profile</button></Link>
                    <h1>My Cart</h1>               
            </div>
        </div>
    )
}

export default Navbar


// {/* <button className='nav-button' >Login</button> */}
// {/* {loggedIn ? "Logout" : "Logout"} */}