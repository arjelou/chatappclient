import React from 'react';
import axios from 'axios';
import { BsDashCircle,BsPencil } from "react-icons/bs";

export default class signup extends React.Component {
constructor(props){
  super(props);
  this.state = {
    messageList: [],
    message: '',
  }
}
componentDidMount(e) {
    fetch('http://localhost:4000/messages')
    .then((res) => res.json())
    .then((response) => {
      this.setState({ 
        messageList: [...response]
      })
    },[])
}

//POST MESSAGE
pusNewMessage = (e) => {
    e.preventDefault();
    const mes = document.getElementById('ms').value;
    const message = (mes);

    axios.post('http://localhost:4000/sentmessage', {
        message: e.target.chat.value
        },
        alert('Chat send!'),
        )
        .then(res => {
            const updateIndex = this.state.messageList.findIndex(mes => message.id === mes.id);
           // eslint-disable-next-line react/no-direct-mutation-state
           this.state.messageList[updateIndex].mes = mes;
           this.setState({ 
            messageList: [
                ...this.state.messageList
            ]
           })
        })
  }

render() {
return (
    <>
    <div className='container'>
    <h3>Chatbox</h3>
    <div className="table-responsive">
    <table className="table"> 
        <tbody className="table-group-divider">
        {
            this.state.messageList.map((message) =>{
            return (
                <>
                <tr key={message.id}>
                <th scope="row">{message.messages}</th>
                <td>{message.email}</td>
                <BsPencil size={40} title='Edit' data-bs-toggle="modal" data-bs-target="#updateNewModal" onClick={(e) => this.selectProduct(
                message.email,
                message.id,
                e)} className='dashboardIcon'/>
                <BsDashCircle size={40} title='Remove' color='red' onClick={(e) => this.deleteRow(message.id, e)} className='dashboardIcon'/>
                </tr>
                </>
            )
            })
        }
        </tbody>
    </table>
    </div>
</div>
<div>

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

