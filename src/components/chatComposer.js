import React from 'react';
import axios from 'axios';
import { BsDashCircle,BsPencil,BsSave,BsSendFill,BsPersonCircle } from "react-icons/bs";

export default class signup extends React.Component {
constructor(props){
  super(props);
  this.state = {
    messageList: [],
    isOpen: false,
    currentUserId: document.cookie.split(";").find((row) => row.startsWith("userId"))?.split("=")[1]?.split("")[0]
  }
}
componentDidMount(e) {
    fetch('http://localhost:4000/messages')
    .then((res) => res.json())
    .then((response) => {
      this.setState({ 
        messageList: [...response]
      })
    })
}
//POST MESSAGE
pusNewMessage = (e) => {
    const userId = document.cookie.split("; ").find((row) => row.startsWith("userId="))?.split("=")[1];
    console.log('cookie-id',userId);
    axios.post('http://localhost:4000/messages', {
    message: e.target.chat.value,
    userId: userId
    }).then(res => {
        this.setState({ 
        messageList: [
            ...this.state.messageList,
            {messageList: e.target.chat.value}
        ]
        })
    })
  }
//DELETE MESSAGE BY ID
deleteMessage(id, e){
  const confirmDelete = window.confirm(`Do you want to delete?`);
  window.location.href ='/u'
  if (confirmDelete){
    axios.delete(`http://localhost:4000/messages/${id}`)
    .then((response) => {
    return(
      {
        ...this.state.product
      }
    )
    });
}else{}
}
//SELECT MESSAGE FROM 
selectMessage(messages,id){
  this.setState({isOpen:true})
  document.getElementById("ms").value = messages;
}
//UPDATE MESSAGE 
editUserMessage(id){
  const usermessage =  document.getElementById("ms").value;
  axios.put(`http://localhost:4000/messages/${id}`,{usermessage})
  .then(response => {
    this.setState({
      tasks: [
        ...response
      ]
    })
});
}

render() {
return (
<>
<div className='chatComposer list-item'>
  <h3>Chatapp</h3>
    <section>
      <ul className='scrollable'>
      {
      this.state.messageList.map((message) =>{
        return (
          <li key={message.id}>
            <p>{message.messages}</p>
            
          <div className='avatarUsername'>
            <span>Sender Name</span>
            <span>{this.state.currentUserId === message.userId ? 'You' : 'Others'}</span>
            <BsPersonCircle size={40} className='avatarMe'/>
          </div>
          <div className='btnIcons'>
            <BsPencil className='icons' size={15} title='Edit' 
              onClick={(e) => this.selectMessage(message.messages,message.id,e)} />
            <BsDashCircle className='icons' size={15} title='Remove' 
              onClick={(e) => this.deleteMessage(message.id, e)} />
              {
                this.state.isOpen && 
                (
                  <BsSave className='icons' size={15} title='Update'
                    onClick={(e) =>this.editUserMessage(message.id, e)}/>
                )
              }
          </div>
          </li>
        )
      })
      }
      </ul>
    </section>
  <section onSubmit={this.pusNewMessage}>
    <form>
      <input type="text" id='ms' name="chat" placeholder='Write Message...' />
      <button type="submit"> <BsSendFill size={25} color='orangered'/></button>
    </form>
  </section>
</div>
</>
)}}

