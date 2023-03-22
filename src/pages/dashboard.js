import React from 'react';
import '../App.css'
import Contactlist from '../components/contactList';
import ChatComposer from '../components/chatComposer';
import { BsPersonCircle } from "react-icons/bs";

export default class dashboad extends React.Component {
constructor(props){
  super(props);
  this.state = {
    userList: [],
    userEmail: '',
  }
}

render() {
    return (
    <div className='container'>
      <div className='avatar'>
        <BsPersonCircle size={35}/>
        <p>{document.cookie.split(";").find((row) => row.startsWith("userId="))?.split("=")[2]}</p>
      </div>
      <Contactlist />
        <ChatComposer />
    </div> 
  )
}
}

