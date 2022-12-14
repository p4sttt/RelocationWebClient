import React from 'react'
import { useState } from 'react'

export default function Users() {

const [users, setUsers] = useState([])

  fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data => setUsers(data))

  return (
    <>
      <h1>All users</h1>
      {
        users.forEach((user) => (
          <>
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </>
        ))
      }
    </>
  )
}
