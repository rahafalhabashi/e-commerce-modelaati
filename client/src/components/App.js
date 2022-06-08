import '../App.css';
// import commerce from '../lib/commerce';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import CreateUser from './CreateUser';
import OwnUserProfile from './OwnUserProfile';
import ProductsList from './ProductsList';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // //Commerce object accesses the products.list() methos to access product data
  // //in Chec product is returned in an object callled data
  // const fetchProducts = (e) => {
  //   commerce.products.list().then(products => {
  //     setProducts(products.data)
  //   }).catch(error => {
  //     console.log('There was an error fetching the products', error)
  //   })
  // }
  // //fecthes products when component first renders to DOM and anytime DOM updates; fetchProducts() being called updates the state with the returned products so we can render our updated data
  // useEffect(() => {
  //   fetchProducts()
  // }, [])


  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          // setCart()
        });
      }
    })

  }, [])

  useEffect(() => {
    fetch("/products").then((res) => {
      if (res.ok) {
        res.json().then((products) => {
          setProducts(products);
        });
      }
    })
  }, [user]);

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
    setProducts([])

  }

  return (
    <div className='page'>
    <div>
      <Navbar
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedIn={loggedIn} />
      <div>
        <ProductsList />
      </div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login" element={<Login
              error={"Please login!"}
              handleLogin={handleLogin}
              setUser={setUser}
              setIsAuthenticated={setIsAuthenticated}
              cart={cart}
              setCart={setCart} 
              setLoggedin={setLoggedIn}
              loggedIn={loggedIn}/>} 
              />
        <Route path="create-user" element={<CreateUser />} />
        <Route path=":id" element={<OwnUserProfile isAuthenticated={isAuthenticated} />} />
        <Route path="item/:itemId" element={<ProductsList cart={cart} products={products} />} />
      </Routes>
    </div>
    </div>
  )
}
export default App;
