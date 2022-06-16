import React, { useState } from 'react'

function CreateUser() {
    const [newName, setNewName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    // function handleNewUser() {
    //     if (username.)
    // }

    // Handling the name change
    function handleNewName(e) {
        setNewName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleNewEmail = (e) => {
        setNewEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleNewBirthdate = (e) => {
        setBirthdate(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePassConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        setSubmitted(false);
    };

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission, creating a new user and persising to db
    const handleNewUser = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newName,
                email: newEmail,
                birthday: birthdate,
                password: newPassword,
                password_digest: passwordConfirmation,
                username: newUsername
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json()
                        .then(user => setNewUsername(user))
                    return res.json().then(body => setNewUsername(body))
                }
            })

        if (newName === '' || newEmail === '' || newPassword === '' || birthdate === undefined) {
            e.preventDefault();
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }

        setNewName('')
        setNewEmail('')
        setNewUsername('')
        setBirthdate('')
        setPasswordConfirmation('')

    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {newName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    }

    return (
        <div align="center">
            <form className="form-container" onSubmit={handleNewUser}>
                <div style={{ fontSize: 10, color: 'red' }}>
                    {errorMessage()}
                    {successMessage()}
                </div>
                <div >
                    <h1 className='form-name'>Create New Account</h1>
                    <br></br>
                    <label>Name </label>
                    <input type="text" name="name" value={newName} onChange={handleNewName} required />
                    <br></br>
                    <label>Email </label>
                    <input type="text" name="email" value={newEmail} onChange={handleNewEmail} required />
                    <br></br>
                    <label>Username </label>
                    <input type="text" name="username" value={newUsername} onChange={handleNewUsername} required />
                    <br></br>
                    <label>Birthday </label>
                    <input type="date" name="birthday" value={birthdate} onChange={handleNewBirthdate} required />
                    <br></br>
                </div>
                <div>
                    <label>Create Password: </label>
                    <input type="password" name="password" value={newPassword} onChange={handleNewPassword} required />
                    <br></br>
                    <label>Confirm Password: </label>
                    <input type="password_confirmation" name="password_confirmation" value={passwordConfirmation} onChange={handlePassConfirmation} required />
                </div>
                <div>
                    <button className='form-button' type="submit" > Create New Account! </button>
                </div>
            </form>
        </div>
    )
}


export default CreateUser


//create the create user form  DONE
// create migration for user
// test migration in Postman
// connect form to routes and make post request to database

//create login form
//Get request to user
//if user is logged in, redirect to home page and give access to cart
//if user is !loggedin, display validation errors
//find way to change login to logout if user = true