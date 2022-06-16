import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUser, user, isAuthenticated, setIsAuthenticated, cart, setCart, setLoggedIn, loggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()
    // console.log(navigate)

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
                if (res.ok) {
                    res.json()
                        .then(user => {
                            setUser(user)
                            setIsAuthenticated(true)
                            setCart(cart)
                            setLoggedIn(true)
                            // navigate("/")
                        })
                    // navigate.push("/")
                } else {
                    res.json()
                        .then(json => setError(json.error))
                }
            },
            
            // navigate.push('/')
            )
    }
    console.log("Logged in?", loggedIn)
    console.log("User:", user)

    return (
        <div align="center" >
            {user ? 
            <h2 style={{ color: 'black', lineHeight: .5, padding: 1, fontWeight: 'bold', fontStyle: 'italic' }}>{`${user.name} is logged in`}</h2>            
                // <p >{loggedIn ? `${user.name} logged in` : "Not logged in"}</p>
            :
            <form className='form-container' onSubmit={handleSubmit}>
                <h1 className='form-name'>Please login below.</h1>
                <br></br>
                <div className='inputs'>
                    <label>Username </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='inputs'>
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
                    <button className='form-button'>Login</button>
                    {/* onClick={() => navigate('/')} */}
                </div>
                <br></br>
                <label style={{ fontSize: "20px", padding: "0px" }}> Don't have an account? </label>
                <Link to="/create-user">
                    <button className='form-button'>Become a Warrior</button>
                </Link>

                {error ? <div>{error}</div> : null}
            </form>
}
        </div>
    )
}

export default Login


