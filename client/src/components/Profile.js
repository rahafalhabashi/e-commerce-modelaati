import React from 'react'
// import {Routes, Route, Link } from 'react-router-dom'
// import OwnUserProfile from "./OwnUserProfile"

function Profile({ user }) {
  return (
    <div>
        <form>
          Name:
          <input type="text" name="name" value={user.name}>{user.name} </input>
        </form>
    </div>
  )
}

export default Profile