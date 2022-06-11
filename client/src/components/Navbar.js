import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from './modelaatilogo.png'
import Cart from './Cart'

function Navbar({ loggedIn, onLogout }) {
    // const [btnPopup, setBtnPopup] = useState(false)

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div>
            <img src={Logo} alt="logo" width={100} />
            <Link to="/"><button className='nav-button'>Home</button></Link>
            <Link to="/Login"><button className='nav-button'>Login</button></Link>
            {/* <button className='nav-button' >Login</button> */}
            {/* {loggedIn ? "Logout" : "Logout"} */}
            <button className='nav-button' onClick={handleLogout} >Logout</button>
            <Link to="/Shop"><button className='nav-button'>Shop</button></Link>
            <Link to="/cart" ><button className='nav-button'>Cart</button></Link>
            {/* onClick={() => setBtnPopup(true)} */}
            <Cart 
            // trigger={btnPopup} setTrigger={setBtnPopup}
            >
                <h1>My Cart</h1>
                {/* {cart.cart_products}  */}
            </Cart>
        </div>
    )
}

export default Navbar