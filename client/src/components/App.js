import '../App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import CreateUser from './CreateUser';
import OwnUserProfile from './OwnUserProfile';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from './Footer'

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartProds, setCartProds] = useState([])
  const [cartTotal, setCartTotal] = useState("")

  // console.log(cartProds)

  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true)
          setUser(user)
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
      .then((res) => {
        if (res.ok) {
          res.json().then(cartProds => setCartProds(cartProds))
        }
      })
  }, [user])

  //fetch user cart
  function handleLogin() {
    setUser(user)
    // setCart(cartProds)
  }

  function handleLogout() {
    setUser(null)
    setLoggedIn(false)
    setCart([])
    setCartProds([])
  }

  useEffect(() => {
    fetch('/totalPrice')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then(cartTotl => setCartTotal(cartTotl))
        }
      })
  }, [cartProds])

  // console.log(cartTotal)
  // console.log('User: ' + JSON.stringify(user))
  // console.log(loggedIn)


  return (
    <div className='page'>
      <div>
        <Navbar
          handleLogin={handleLogin}
          onLogout={handleLogout}
          loggedIn={loggedIn}
          setCart={setCart} />

        <Routes>
          <Route path="/*" element={<Home user={user} cart={cart} setCart={setCart} products={products} cartProds={cartProds} setCartProds={setCartProds} loggedIn={loggedIn} />} />
          <Route path="login" element={<Login
            error={"Please login!"}
            handleLogin={handleLogin}
            setUser={setUser}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
            cart={cart}
            setCart={setCart}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
            user={user}
            cartProds={cartProds}
            setCartProds={setCartProds} />}
          />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="/profile" element={<OwnUserProfile isAuthenticated={isAuthenticated} user={user} />} />
          <Route path="/checkout" element={<Checkout cartProds={cartProds} />} />
          <Route path="/cart" element={<Cart user={user} cartProds={cartProds} setCartProds={setCartProds} cart={cart} setCart={setCart} product={products} cartTotalPrice={cartTotal} setCartTotal={setCartTotal} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
export default App;
