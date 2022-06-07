import '../App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import CreateUser from './CreateUser';
import OwnUserProfile from './OwnUserProfile';
import ItemContainer from './ProductContainer';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);


  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          setCart(cart)
        });
      }
    })

  }, [])

  useEffect(() => {
    fetch("/items").then((res) => {
      if (res.ok) {
        res.json().then((items) => {
          setItems(items);
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
    setItems([])

  }

  if (!isAuthenticated) {
    <Login
      error={"Please login!"}
      handleLogin={handleLogin}
      setUser={setUser}
      setIsAuthenticated={setIsAuthenticated}
      cart={cart}
      setCart={setCart}
    />;
  }

  return (
    <div>
      <Navbar
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedIn={loggedIn} />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path=":id" element={<OwnUserProfile />} />
        <Route path="item/:itemId" element={<ItemContainer cart={cart} items={items}/>} />
      </Routes>
    </div>
  )
}
export default App;
