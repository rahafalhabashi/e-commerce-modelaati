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
// import Cart from './Cart';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

      
      // if (res.ok) {
      //   res.json()
      //   .then((products) => {
      //     setProducts(products);
      //     console.log(products)
      //   });
      // }
// console.log(products)
  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
    setCart([])
  }

  return (
    <div className='page'>
    <div>
      <Navbar
        handleLogin={handleLogin}
        onLogout={handleLogout}
        loggedIn={loggedIn} />

      <Routes>
        <Route path="/*" element={<Home cart={cart} products={products}/>} />
        <Route path="login" element={<Login
              error={"Please login!"}
              handleLogin={handleLogin}
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              cart={cart}
              setCart={setCart} 
              setLoggedin={setLoggedIn}
              loggedIn={loggedIn}
              user={user}/>} 
              />
        <Route path="create-user" element={<CreateUser />} />
        <Route path=":id" element={<OwnUserProfile isAuthenticated={isAuthenticated} />} />
        {/* <Route path="/cart" element={<Cart cart={cart} />} /> */}

        {/* <Route path="item/:itemId" element={} /> */}
      </Routes>
    </div>
    </div>
  )
}
export default App;
