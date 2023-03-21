import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class signup extends React.Component {
constructor(props){
  super(props);
  this.state = {
    email: '',
    password: '',
    confirmPassword: '',
  }
}
 
newUserSignup = (e) => {
  e.preventDefault();
  axios.post('http://localhost:4000/signup', {
      email: e.target.email.value,
      password: e.target.password.value,
      confirmpassword: e.target.confirmpassword.value,
      }, 
      alert('Signup successfuly!'),
      window.location.href ='/login'
      )
      .then(res => {
      console.log(res.data);
      })
}

  render() {
    return (
    <div className='login'>
        <form onSubmit={this.newUserSignup}>
            <h3>Signup</h3>
            <label>Username</label>
            <input type='email' placeholder='Enter username' name='email' />
            <label>Password</label>
            <input type='password' placeholder='Enter password' name='password'  />
            <label>Confirm Password</label>
            <input type='password' placeholder='Enter confirm password' name='confirmpassword' />
            <button>Proceed</button> 
        </form>
        <span>Have an account? <NavLink to='/login'>Login</NavLink></span>         

    </div>
  )
}
}

