import React from 'react'
import { useState } from 'react'
const UserDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const userdetails = {name, email}
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(userdetails);
        const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify(userdetails),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
  return (
    <div>
      <h1>User Details</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' value={name} name="name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='Email' value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserDetails
