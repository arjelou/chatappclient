import React from 'react';
import '../App.css';
import { Outlet, NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <div className='container-fluid'>
        <NavLink to='/login' className='alink'>Login</NavLink>
        <NavLink to='/signup' className='alink'>Signup</NavLink>
        <Outlet />
    </div>
  )
}
