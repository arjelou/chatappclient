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
    <div className='container'>
    <h3>Contact List</h3>
    <div className="table-responsive">
    <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Email Address</th>
        </tr>
        </thead> 
        <tbody className="table-group-divider">
        {
            this.state.userList.map((user) =>{
            return (
                <>
                <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.email}</td>
                <BsPencil size={40} title='Edit' data-bs-toggle="modal" data-bs-target="#updateNewModal" onClick={(e) => this.selectProduct(
                user.email,
                user.id,
                e)} className='dashboardIcon'/>
                <BsDashCircle size={40} title='Remove' color='red' onClick={(e) => this.deleteRow(user.id, e)} className='dashboardIcon'/>
                </tr>
                </>
            )
            })
        }
        </tbody>
    </table>
    </div>
</div>
  )
}
}

