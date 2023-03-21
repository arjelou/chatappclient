import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class login extends React.Component {

  userLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', {
        email: e.target.email.value,
        password: e.target.password.value,
        })
        .then(res => {
          document.cookie = res.data.id > 0 ? `userId = ${res.data.id}` : '';
          if(res.data === ''){
            alert('Invalid username or password!');
          }else{
            alert('Login successfuly!')
            window.location.href ='/u'
          }
    })
  }

  render() {
    return (
    <div className='login'>
    
        <form onSubmit={this.userLogin}>
            <h3>Login</h3>
            <label>Username</label>
            <input type='email' placeholder='Enter username' name='email' />
            <label>Password</label>
            <input type='password' placeholder='Enter password' name='password' />
            <button>Login</button> 
        </form>
        <span>Don't have account?  <NavLink to='/signup'>Signup</NavLink></span>         
    </div>
  )
}
}

