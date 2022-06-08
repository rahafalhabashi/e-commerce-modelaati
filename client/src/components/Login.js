import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login({setUser, handleLogin, setIsAuthenticated, cart, setCart, setLoggedIn, loggedIn}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate()
    console.log(navigate)

    function handleSubmit(e) {
        e.preventDefault();
        console.log("hey");
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setUser(user)
                setIsAuthenticated(true) 
                navigate("/")
                setCart(cart)
                setLoggedIn(true)
              })
              
            } else {
              res.json()
              .then(json => setError(json.error))
            }
          })
    }


  return (
    <div className='form'>
        <header className="App-header">
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            <div>
                <p> Don't have an account? </p>
                <Link to="/create-user">
                    <button className='nav-button' type="button">Become a Warrior</button>
                </Link>
            </div>
            </header>
            {error?<div>{error}</div>:null}
    </div>
  )
}

export default Login


