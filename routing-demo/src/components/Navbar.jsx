import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">
                    Dashboard
                    </Link></li>
                <li>
                    <Link to="/profile">
                    Profile
                    </Link></li>
                <li>
                    <Link to="/login">
                    Login
                    </Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default navbar