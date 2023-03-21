import React from 'react';
import { BsDashCircle,BsPencil } from "react-icons/bs";

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
    <h3>Contact List</h3>
    <section>
        <ul>
        {
        this.state.userList.map((user,index) =>{
          return (
            <li key={index}>
            {user.email}
            <BsPencil size={20} title='Edit' data-bs-toggle="modal" data-bs-target="#updateNewModal" onClick={(e) => this.selectProduct(
                user.email,
                user.id,
                e)} className='dashboardIcon'/>
                <BsDashCircle size={20} title='Remove' color='red' onClick={(e) => this.deleteRow(user.id, e)} className='dashboardIcon'/>
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

