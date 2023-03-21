import React from 'react';
import axios from 'axios';
import { BsDashCircle,BsPencil } from "react-icons/bs";

export default class signup extends React.Component {
constructor(props){
  super(props);
  this.state = {
    messageList: []
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
selectMessage(messages){
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
<div className='chatComposer'>
  <h3>Chatbox</h3>
    <section>
      <ul>
      {
      this.state.messageList.map((message,index) =>{
        return (
          <li key={index}>
          {message.messages}
          <BsPencil size={20} title='Edit' 
            onClick={(e) => this.selectMessage(message.messages,message.id,e)} className='dashboardIcon'/>
          <BsDashCircle size={20} title='Remove' color='red' 
            onClick={(e) => this.deleteMessage(message.id, e)} className='dashboardIcon'/>
          <button onClick={(e) =>this.editUserMessage(message.id, e)}>Update</button>
          </li>
        )
      })
      }
      </ul>
    </section>
  <section onSubmit={this.pusNewMessage}>
    <form>
      <input type="text" id='ms' name="chat" placeholder='Write Message...' />
      <button type="submit">Sent</button>
    </form>
  </section>
</div>

</>
  )
}
}

