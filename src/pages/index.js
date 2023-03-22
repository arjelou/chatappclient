import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function index() {
  return (
  <>
    <div className="welcome-page">
      <h1 className='homepageH'>Welcome to Chat Application</h1>
      <p className='homepageP'>Join the conversation and start chatting with your friends!</p>
      <NavLink to="/signup" className="register-button">Sign up</NavLink>
    </div>
  </>
  )
}
