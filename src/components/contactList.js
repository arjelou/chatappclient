import React from 'react';
import { BsPersonCircle } from "react-icons/bs";

export default class signup extends React.Component {
constructor(props){
  super(props);
  this.state = {
    userList: [],
  }
}
componentDidMount() {
    fetch('http://localhost:4000/users')
    .then((res) => res.json())
    .then((response) => {
      this.setState({ 
        userList: [...response]
      })
    })
}

render() {
return (
<div className='contactList'>
    <h5>Contact List</h5>
    <section>
        <ul>
        {
        this.state.userList.map((user,index) =>{
          return (
            <li key={index}>
            <BsPersonCircle size={25} className='avatarIcon'/>
            {user.email}
            </li>
          )
        })
        }
        </ul>
    </section>
</div>
)
}
}

