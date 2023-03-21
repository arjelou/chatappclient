import React from 'react';
import '../App.css';
import { Outlet, NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div className='main'>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <Outlet />
    </div>
  )
}
