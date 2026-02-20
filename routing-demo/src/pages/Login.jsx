import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="username">User name</label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your user name"
            autoComplete="username"
          />
          <button type="submit">Sign in</button>
        </form>
    </div>
  )
}

export default Login