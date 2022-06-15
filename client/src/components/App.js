import '../App.css';
// import commerce from '../lib/commerce';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import CreateUser from './CreateUser';
import OwnUserProfile from './OwnUserProfile';
// import ProductsList from './ProductsList';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartProds, setCartProds] = useState([])

  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          setLoggedIn(true)
          // setCart()
        });
      }
    })
    //fetched products
    fetch("/products")
      .then((res) => res.json())
      .then(products => setProducts(products))


  }, [])

  useEffect(() => {
    fetch('/cart')
      .then((res) => res.json())
      .then(cartProds => setCartProds(cartProds))
  }, [cart])
  // console.log(cartProds)

  //fetch user cart

  // console.log(products)
  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
    setCart([])
  }


console.log('user:', user)
  return (
    <div className='page'>
      <div>
        <Navbar
          handleLogin={handleLogin}
          onLogout={handleLogout}
          loggedIn={loggedIn}
          setCart={setCart} />

        <Routes>
          <Route path="/*" element={<Home user={user} cart={cart} setCart={setCart} products={products} />} />
          <Route path="login" element={<Login
            error={"Please login!"}
            handleLogin={handleLogin}
            setUser={setUser}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            cart={cart}
            setCart={setCart}
            setLoggedin={setLoggedIn}
            loggedIn={loggedIn}
            user={user} />}
          />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="/my-profile" element={<OwnUserProfile isAuthenticated={isAuthenticated} />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* {cartProds.map((prod) => ( */}
          <Route path="/cart" element={<Cart user={user} cartProds={cartProds} setCartProds={setCartProds} cart={cart} setCart={setCart} product={products} />} />
          {/* ))} */}
        </Routes>
      </div>
    </div>
  )
}
export default App;
