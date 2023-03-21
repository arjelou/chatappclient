import React from 'react';
import Contactlist from '../components/contactList';
import ChatComposer from '../components/chatComposer';
import { BsPersonCircle } from "react-icons/bs";


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
        <BsPersonCircle size={35} className='logout'/>
        <Contactlist />
        <ChatComposer />
    </div> 
  )
}
}

