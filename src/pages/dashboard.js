import React from 'react';
import Contactlist from '../components/contactList';
import ChatComposer from '../components/chatComposer';
export default class dashboad extends React.Component {
constructor(props){
  super(props);
  this.state = {
    userList: [],
  }
}

render() {
    return (
    <div className='container'>
        <Contactlist />
        <ChatComposer />
    </div> 
  )
}
}

