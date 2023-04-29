import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
      <a> <Link to ='/home'> Home</Link></a>
      <a> <Link to ='/about'> About</Link></a>
      <a> <Link to ='/service'> Service</Link></a>
      <a> <Link to ='/register'> Register</Link></a>
      <a> <Link to ='/login'> Login</Link></a>
    </div>
  )
}
